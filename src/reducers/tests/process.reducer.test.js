import processReducer from '../Process.reducer';
import { MAX_PROCESS_WORKERS } from '../../constants';
import {
    assignWorker,
    autoAssign,
    removeWorker,
    runProcess,
    setProcessPriority,
    suspendProcess,
    tick,
} from '../../actions/Process.actions';

const defaultProcessState = {
    id: 123,
    maxWorkers: MAX_PROCESS_WORKERS,
    currentWorkers: 0,
    name: '',
    description: '',
    priority: 0,
    assigned: false,
    status: 'Unassigned',
    startTime: null,
    tasks: [],
    running: false,
    totalTime: 10,
    computationRemaining: 0,
    percentageComplete: 0,
    timeRemaining: 0,
    icon: 'cog',
};
const { id } = defaultProcessState;

describe('Process reducer', function() {
    it('should not start working until it has been assigned workers', function() {
        let outcome = processReducer(defaultProcessState, runProcess({ id }));
        expect(outcome.running).toEqual(false);
        outcome = processReducer(outcome, assignWorker({ id }));
        outcome = processReducer(outcome, runProcess({ id }));
        expect(outcome.running).toBe(true);
    });

    it('should increment the number of current workers when a worker is assigned, and change its status to assigned', function() {
        let outcome = processReducer(defaultProcessState, assignWorker({ id }));
        expect(outcome.currentWorkers).toBe(1);
        expect(outcome.assigned).toBe(true);
        expect(outcome.status).toBe('Assigned');
        outcome = processReducer(outcome, assignWorker({ id }));
        outcome = processReducer(outcome, assignWorker({ id }));
        expect(outcome.currentWorkers).toBe(3);
    });

    it('should decrement the number of current workers when a worker is removed, and change its status to unassigned when its at 0 workers', function() {
        let outcome = processReducer(defaultProcessState, assignWorker({ id }));
        outcome = processReducer(outcome, assignWorker({ id }));
        expect(outcome.currentWorkers).toBe(2);

        outcome = processReducer(outcome, removeWorker({ id }));
        expect(outcome.currentWorkers).toBe(1);
        expect(outcome.assigned).toBe(true);
        expect(outcome.status).toBe('Assigned');

        outcome = processReducer(outcome, removeWorker({ id }));
        expect(outcome.currentWorkers).toBe(0);
        expect(outcome.assigned).toBe(false);
        expect(outcome.status).toBe('Unassigned');

        // If there are no workers, and we try to remove one, nothing should change
        let newOutcome = processReducer(outcome, removeWorker({ id }));
        expect(newOutcome).toEqual(outcome);
    });

    it('should change priority according to the priority provided', function() {
        let outcome = processReducer(defaultProcessState, setProcessPriority({ id, priority: 3 }));
        expect(outcome.priority).toBe(3);
    });

    it('should describe itself as running when the run command is issued', function() {
        let outcome = processReducer(defaultProcessState, assignWorker({ id }));
        outcome = processReducer(outcome, runProcess({ id }));
        expect(outcome.running).toBe(true);
        expect(outcome.status).toBe('Running');
    });

    it('should describe itself as suspended when the suspend command is issued', function() {
        let outcome = processReducer(defaultProcessState, assignWorker({ id }));
        outcome = processReducer(outcome, runProcess({ id }));
        outcome = processReducer(outcome, suspendProcess({ id }));
        expect(outcome.running).toBe(false);
        expect(outcome.status).toBe('Paused');
    });

    it('should set the priority and number of workers accordingly when auto assigning', function() {
        const priority = 3;
        let outcome = processReducer(defaultProcessState, autoAssign({ id, priority }));
        expect(outcome).toEqual({
            ...defaultProcessState,
            assigned: true,
            status: 'Assigned',
            priority,
            currentWorkers: priority * 5,
        });
    });

    it('should adjust its figures accordingly per tick', function() {
        // Nothing happens by default
        let outcome = processReducer(defaultProcessState, tick());
        expect(outcome).toEqual(defaultProcessState);

        //Nothing happens when its been assigned
        outcome = processReducer(outcome, assignWorker({ id }));
        let tickOutcome = processReducer(outcome, tick());
        expect(tickOutcome).toEqual(outcome);

        //Percentage and remaining computation decremented
        outcome = processReducer(outcome, runProcess({ id }));
        tickOutcome = processReducer(outcome, tick());
        expect(tickOutcome).toEqual({
            ...outcome,
            timeRemaining: 9,
            computationRemaining: 9,
            percentageComplete: 10,
        });

        //Add some extra workers
        outcome = processReducer(tickOutcome, assignWorker({ id }));
        outcome = processReducer(outcome, assignWorker({ id }));
        tickOutcome = processReducer(outcome, tick());
        expect(tickOutcome).toEqual({
            ...outcome,
            computationRemaining: 6,
            percentageComplete: 40,
            timeRemaining: 2,
        });

        // Add more workers than is needed and finish the task
        outcome = processReducer(tickOutcome, assignWorker({ id }));
        outcome = processReducer(outcome, assignWorker({ id }));
        outcome = processReducer(outcome, assignWorker({ id }));
        outcome = processReducer(outcome, assignWorker({ id }));
        tickOutcome = processReducer(outcome, tick());
        expect(tickOutcome).toEqual({
            ...outcome,
            computationRemaining: 0,
            percentageComplete: 100,
            timeRemaining: 0,
            assigned: false,
            currentWorkers: 0,
            running: false,
            status: 'Completed',
        });
    });
});
