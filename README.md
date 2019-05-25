
# BP Tech Test  [UPDATED]
  
Thank you for giving me the opportunity to prove my skills. What I have completed here should hopefully show off a variety of my skills and preferred techniques in React.   

## ✨ Whats new?
### 👩‍🔬 State
I decided that having redux on my ui was good and all, but it wasn't necessarily indicative of how I would use state in a real world application that relied on the server for its state. So, I put together a small express server within the source of this project that would be my source of truth. I didn't want for all my redux work to go to waste, and I certainly didn't want to implement a database. So I moved all the redux logic to the server, and it would hold the data in memory - most of it was hard coded anyway.

#### 🌐 The Server
It is really just a basic express server, that listens on localhost and responds to a handful of endpoints. That being said, I did stick to MVC principles (or rather MC in this case), and made sure that it would scale up nicely if I wanted to make it smarter in the future. It follows REST principles too. 

I'm also a huge fan of realtime, so I implemented [Socket.io](https://socket.io) on the server too. Now, when the data changes, I will push out a notification to anyone listening. Of course, this is not super smart, so there is no masking on the notifications or anything. But the big plus here is that the server is the new state, and the ultimate source of truth.

#### 🖥  The App
Because the app had all the redux ripped out of it, it has to ask the server for state. It also needs to listen out for state changes and re-render accordingly. Thankfully, hooks make that super simple, and the fact that they are reusable is just magical with stuff like this. Actions had to be recreated as http requests, but because of how it was set up, this was pretty trivial and the components did not need to change **at all**. 

Lastly, there still needs to be some state right? For that, I could have used redux again, but I decided to use the react context API instead, with hooks. It actually does the same thing as redux in the way that I implemented it here, but I've been wanting to try and do that for a while anyway. The upside of doing this is not only could I switch themes more easily, but I could pass the current them to any component that wants it, rather than just the styled components.

### 🎨 Theming
I knew the theming was good, but I wanted a better way to prove it, rather than asking you to tinker around in theme files. So, I put a theme switcher in. Click the 3 dots on the top right, and switch to dark mode to see what I mean. It's not super pretty, but you get the idea. The cool part was that I only needed to tweak 4 components, the rest all fell into place naturally.
  
## ✏️ The Task  
I wanted to get the task done as soon as possible, so that should an interview be requested, that it could be done sooner rather than later. Because of this, I have not made a complete fully functioning application that functions under all the parts of the UI. Instead, I focussed on various parts that would show off a variety of skills. Were I to spend more time on this, it would be just a replication of those skills. The same goes for the tests, I have showed off how I would test some parts, and the rest would really just be variations of the same thing.  
  
The brief of the task was to '*make a working web page*' from the provided designs. As such, I have replicated the designs and prototyped functionality, as well as gone a little bit further to show how it might work by simulating tasks being completed. I will explain how I did this in the execution section.  
  
I have also made some small adjustments to the designs, which I will explain in the relevant section. Apologies in advance if I am ripping up someone else's work, I would hope that someone would do the same to my designs if the roles were reversed.  
  
## ⚛︎ React  
  
### Stack  
 - **State management**: ~~Redux (with redux hooks)~~ React Hooks  
 - **Server**: Express with Socket.io
 - **Styling and Theming:** Styled Components  
 - **Testing**: Jest and Enzyme  
 - **Extra Dependencies**: None  
  
### 🍡 Components  
Using React 16.8.6, I have completed this task using only functional components. I have developed my own component generator, which you can find in the `generators` folder. I use this to quickly spin up components, their tests, file structures, props, and styled components. The basic component structure looks something like this:  
  
```  
MyComponent  
- tests  
- - MyComponent.test.js  
- index.js  
- MyComponent.js  
- MyComponent.styled-components.js  
```  
While the structure is not important, something to take note of is that the index file only exports `MyComponent`. In doing so, this gives us a "buffer" layer where we might have hooked up redux to the component. This allows us to test the component purely, and not have to import providers in our tests. ~~Also, should the way in which we get the data, (ie, not from a redux store, but from a server) change, then it's super easy to move components around, and the only thing that needs to change is the buffer layer.~~  ✌️
  
Disclaimer: Like the generator, there are components I have developed for other personal projects that were useful here, specifically the Popover used on the dropdown menu. I didn't want to import all of Bootstrap / antd / material-ui for one component.  
  
### ⚡️ Execution  
I wanted this to be a living, breathing system. I did this using a `Tick` action. This tick represents a second of time, and simply tells all connected components that a second has passed. They will then modify their state accordingly. These were the rules I set out:  
  
 - A process can only start if it has workers assigned to it. If it has no workers assigned to it, it has a status **Unassigned** else, it is **Assigned**.  
 - The user can add or remove workers to a process such that `0 < workers < MAX_WORKERS`  
 - The user can then start or pause the process. A started process has a status of **Running**, while a paused process is **Paused**.  
 - A process has a predetermined `totalComputationTime` which is how much work is needed to complete this process. Note: This could have been further recursed by calculating this figure as the total of all the tasks that made up this process. As noted above, it's more of the same thing. Where it could have been made a bit more tricky is that certain tasks may have dependencies on others, so that some would have to wait for others to be finished. I'll obsess over that.  
 - On each tick, the process must decrease the `computationRemaining` by the number of `workers` assigned to the process. In other words, 1 worker can do 1 unit of computation per click, while 10 workers would do 10 units.   
 *We can get quite fancy here and say that some tasks have a limit of the max number of workers on it. Similarly, some workers have preference to certain tasks, or that some workers have different efficiencies (linear, cubic, log etc). For simplicity sakes, let's keep them all linear.*  
 - The `computationRemaining` must always be > 0. Ideally, overspill workers are sent back to the worker pool immediately, but for simplicity sakes, here they just wait around for the process to be complete.  
 - A task that has been completed must have a status of  **Complete**  
 - Once a task is completed, all workers must be removed from the task, it must stop executing, and return to its initial state, barring its status.  
 - A task may be AutoAssigned. The user must select a priority, and the number of users assigned will be 5x the priority. This obviously is hard coded, but it should be the same principal, with smarter logic.  
 - The user should be able to filter the tasks by typing in the search box  
  
This should hopefully make sense when looking at the designs.   
  
### Theming  
I like to make sure that css variables are maintained throughout the application. The upside of doing that with CSS in JS is that theming becomes quite easy. ~~While I haven't included a theme switcher on this, by going into `src/components/UI/LightTheme.js` you can tinker with these values to get an idea of how they might affect the document. My personal favourite is setting `colors.primary` to something like `#8E60B7` and seeing how it all cascades nicely, on the popover menus and icons.~~   😎
  
## 💅 UI / UX  
Again, apologies in advance.   
#### 🥽 **UI Observations:**  
 - Inconsistent border-radius on process card  
 - Inconsistent border colors  
 - Inconsistent element margins  
 - Inconsistent font sizes  
 - Difficult to click + / - buttons  
 - Border Scaling issues on stars  
 - Progress bar inconsistent: changes from solid border to gradient  
 - Text is difficult to read on the progress bar, it is small and does not have sufficient contrast  
 - Inconsistent icon colors  
  
Working with a theme makes these kinds of things easier to remedy in code, so I made some decisions here that would hopefully make these designs a bit more consistent.  
  
#### 👓 **UX Observations:**  
  
 - I am not sure what the primary function of this page and these components are. Am I supposed to be assigning workers to processes, starting processes, observing process execution or prioritising / scheduling processes?  
 - The gear button is right next to the status of the process, but clicking on it has nothing to do with the status. Users would be confused as to how they would know to click there to auto assign a process some workers.   
 - The gear icon normally means some kind of settings, rather than extra options. Users might not think to click this when trying to Archive a process, for instance.  
 - What do the stars mean? I can't click on them. I have to click on a cog, then select AutoAssign and only then do they make sense.  
 - Also, if I click any of the items in this menu, will I loose my current progress by navigating away?  
 - While stars are an easy to identify indicator, how do I know what gets priority when all of my processes are 3 stars?  
 - The progress bar suddenly appears when I click start, I had no idea that this is where I would monitor my progress too.  
 - It is not obvious what the eye button next to the progress does, will it impede this tasks progress? I better not click on it just in case.  
 - Ok, I clicked it, it didn't break, phew. The black text looks good on the progress bar BG, but I can't read it when the bar catches up to it.  
 - Users will struggle to differentiate processes from one another at a glance.  
 - Users will struggle to know if there is a problem with one of the processes at a glance.  
 - The play button looks clickable, but it isn't because I don't have any workers assigned. I didn't know I needed to add workers.  
 - How will users know how many workers is sufficient for the task they want to complete? Would it not be better to have the number of workers configurable as an extra option, while the default behaviour is to auto-configure?  
  
While I didn't fix all of these, I made some small tweaks, but kept the overall look and feel. I believe there is a different approach to what this page is trying to solve, and will gladly discuss in person. Once again, if I'm overstepping my bounds by pointing this out, I do apologise.  
  
#### 🧞‍♂️ Preference Changes:  
- This is probably just me being lazy, but I have used FontAwesome icons, rather than ripping the icons from this design file.  
- Card visual hierarchy: I don't believe that labels are needed in order to convey the title and description of the cards, rather a clean hierarchy can be established that naturally describes them.   
- The stars looked broken in the designs, so I used FontAwesome stars instead.  
  
![Before Screenshot](https://raw.githubusercontent.com/mikebrits/bp-tech-test/master/screenshots/Part%201.png)  
  
#### 💡 UX Changes:  
- I felt that the blur effect on the whole page when clicking an overflow menu would be a jarring experience for the user. If the desired effect is to completely ignore everything else on the page (but not get rid of it), and draw the users attention to some content, then use a modal. This paired with a settings / gear icon would make more sense, but the items in the modal would need to be relevant. For example, Archive would not make sense in a modal, but rather a context Popover menu.  
- Moving the cog away from the status allowed the status to be its own entity. I moved the settings to the title bar as users would associate the actions within it pertaining to the whole card. I also changed the icon to 3 dots, as this is a known pattern as seen on the top right of the page.  
- I added colours and icons to the status bar. Now, at a glance, I know when something is up. Also, I know that I need to assign users for this to go away.   
- I greyed out the play button when there is an error (in this case Unassigned) so users know they need to do something before they can play. The next thing they will see is the big red unassigned bar, and their behaviour should fall in line.  
- After the user clicks the + button to add a worker, the play button lights up, and the red warning goes away.  
- Blue and purple colours are used for statuses that should not draw my attention too much - everything is OK, as you were.  
- Green is used for the Complete status. This jumps out and lets the user know immediately that their task is done.  
- Added an icon to the Process title. Now, I don't need to read the process name to know what I'm looking at. At a glance I am informed.  
- When toggling the progress stats, I have made it so light text is on a dark BG and vice versa.  
  
![After Screenshot](https://raw.githubusercontent.com/mikebrits/bp-tech-test/master/screenshots/Part%202.png)  
  
You'll notice that I kept the bar and the stats relatively similar. I wanted to show off a possible solution to the problem presented, but I actually think there is a better way to display the information, which I will present in person.  
  
## 🏃🏻‍♂️ Running the project  
### App 
 
    $ git clone https://github.com/mikebrits/bp-tech-test.git 
    $ cd bp-tech-test 
    $ yarn 
    $ yarn start  

### Server
This is a new bit, the app wont work without it. So, from the project root (`bp-tech-test`):

    $ cd server
    $ yarn start

## 🙌 Final Note  
~~For a product like this, the server must always be the ultimate source of truth. The way that I have set this up is not particularly representative of how I might solve this problem in a real world scenario. In fact, I probably would not even use redux; the server is ultimately my state, and trying to replicate server logic with front-end logic is not a scalable solution. Ideally, I would be connecting to some web socket, and instead of ticking along to update, I would just be feeding in data that the server gives me. For updating values, there will be some kind of optimistic updates, and error resolution, but I believe that redux may be overkill for this, and a blocker to onboard new advocates of the product.~~  
  
~~But, I did want to show you that I can use redux, and understand data flow 🚀~~ 🕺

**Thanks for this, it was fun!**