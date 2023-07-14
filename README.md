# SE-summative-1
Repo for SE summative assignment 1

For this project I will develop a simple JavaScript app that could be used within my workplace. My organisation is in the medical field and my chosen application is a simple calculator that can be used by healthcare professionals to estimate which sized implants will be required for a surgery given some simple patient information (age, sex, height, weight). The full algorithm used to perform such estimations is currently presented as an API and integrated to various digital solutions that the company offers. However, this app is intended as a lightweight and quick tool that surgeons can use when initially planning sugeries before requiring detailed MRI scans and other detailed measurements.   


Describe approach to prototype design
When prototyping this design Figma was used to draft a simple, single page form that can be used to enter patient information and perform the necessary calculations to return the estimated implant size. The prototype styling was designed to align to company branding and was shared with multiple end users to collect initial feedback. Alterations were then made to the design ahead of development.  


Project planning technique: Agile, 1 week sprints, use of Github projects, 
--addition of tickets/issues, to define product requirements
Throughout the design process an agile approach to development was taken. To align with course deadlines, 3 one-week sprints were planned. Week 1 focused on prototype design, set up of repository and preparation of initial backlog issues. During this sprint the project set up was completed, producing the initial prototype and adding a starting set of stories/issues to the development backlog.

During the second sprint the bulk of the development work was done, replicating the prototype design in the codebase and adding the logic required to perform the implant size calculation. Finally, the third sprint included the addition of testing for the application, adequate time was also left in this sprint to allow for the correction of issues raised during testing.

To manage the project the GitHub projects tool was used. This was chosen due to it's lightweight nature and close integration with the rest of the GitHub platform. This tool enables the linking of defined Issues to development tickets that can be used in project views including Kanban boards and roadmaps. In this project I used the roadmap feature to initially plan out the high level approach and timelines for development.

A kanban board was then used to track development work throughout the development. Throughout the project new issues would be raised at any time and added to the "backlog" queue of the kanban board once accepted. At the start of each sprint the previous sprint's work was evaluated and any priority issues from the backlog were added to the "To Do" queue of the kanban board, these issues would then be implmented during the upcoming sprint and moved to "In Progress" and then "Done" once implemented. 

Overall I found this approach to project management highly effective, allowing for flexibility in the features required for development and for new requirements to be defined throughout the project. The use of GitHub projects also enabled careful tracking of development tasks and progress toward sprint objectives, ensuring an organised delivery methodology. Overall, this approach allowed for development to quickly get underway without requiring extensive planning upfront.

However, something that I would change is to ensure that story points were assigned to each issue to enable a more accurate prediction of workload across each sprint. One drawback to GitHub projects is the lack of a simple story point assignment model such as that in JIRA or similiar tools. 

Build process: use of git pull requests, management of code
The development of the application was completed on my local machine using VS Code. A cloned version of the repository was taken and following any changes code was then deployed to the Github repo. 

The application essentially takes the structure of HTML form elements that enable the user to input numerical text and select sex from a dropdown menu before clicking a submit button that then returns the size of implant in a piece of text at the bottom of the screen. A class "form group" was defined to enforce consistant styling across the form elements, the main elements used were label, input (with type number) and select. Some simple form validation was enforced at this point by defining if the field was 'required', as well as min and max acceptable values for each input. This validation prevents form submission if any field is left blank.

Select button!!

CSS was developed to replicate the styling of the protoype across the form elements. All labels and entry boxes had appropriate fonts, alignments, and sizes applied to improve the aesthetic of the form. Note, at this point some styling changes were made because when viewing the actual application certain text and input elements appeared overwhelmingly large and were adjusted as such. One criticism of the application that I would make at this time is that it would be very useful to get some input from a more design focused developer (e.g., UI expert) to improve the look and feel of the application. The collaboration focused nature of GitHub would make it easy to get such input so in the future if the application were to continue being developed as an open source project this would be one focus area for improvement.

JavaScript was developed in the index.js file to build the logic for the actual calculation. This function is called calculate() and takes inputs from the 4 form values to perform a simple mathematical calculation that returns implant size. The numerical inputs 

Test process: How is testing (CI) built into deployment, 

Evaluate the design
