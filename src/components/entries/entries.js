export const buttons = [
    {
        id:1,
        tag:`button`,
        intro:`Buttons are one of the most common components in any application
                & having them be visually striking is important to catch the user
                attention. Each entry on this page showcases ways to design
                a button for different types of actions. `,
        title:"Trash Button",
        description:`Good to use for actions common in an application such as deleting something.`,
        code: `
.trash{
    background-color: transparent;
    border-radius: 50%;
    transform: scale(.9);
    transition: background-color .2s ease-in, 
                transform .2s ease-in;
}
.trash:hover{
    background-color: rgb(14 165 233);
    transform: scale(1);
}`,
    },
    {
        id:2,
        tag:`button`,
        title:"Add Button",
        description:`Good way to use to tell the user that you can intereact with this element with a small amount of CSS`,
        code: `
.add{
    background-color: transparent;
    transition: transform .2s ease-in;
}
.add:hover{
    transform: translateY(-.5rem);
}`,
    },
    {
        id:3,
        tag:`button`,
        title:"Claim Button",
        description:`Visually appealing way to tell the user that you can intereact with this element`,
        code: `
.claim{
    background-color: rgb(113 113 122);
    border: solid 2px white;
    color: white;
    padding: 1.5rem 3rem;
    border-radius: 1rem;
    transition: background-color .2s ease-in;
}
.claim:hover{
    background-color: transparent;
}`,
    },
    {
        id:4,
        tag:`button`,
        title:"Submit Button",
        description:`Alternative way to use to tell the user that you can intereact with this element.
                    Note: Could mess up the layout of your site if not used carefully`,
        code: `
.submit{
    background-color: transparent;
    border: solid 1px white;
    color: #eee;
    padding: 1.5rem 2.5rem;
    border-radius: 1rem;
    transition: border .2s ease-in;
}
.submit:hover{
    border: 4px solid white;
}`,
    },
    {
        id:5,
        tag:`button`,
        title:"CTA Button",
        description:`Use for call to action content such as a contact/message component`,
        code:`
.cta{
    background-color: rgb(51 65 85);
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-weight: 800;
    z-index: 2;
    transition: transform .2s ease-in, 
                color .2s ease-in;
}
.cta:hover{
    transform: scale(1.25);
    color: rgb(167 139 250)
}`,
    },
]

export const tabs = [
    {
        id:1,
        tag:`tab`,
        intro:`Tabs are very useful when u have a large amount of related content &
                you want to divide them up into sections. The following examples could also 
                be used to give your links a bit of visual flair when the user hover over one.`,
        title:"Higlight Tab ",
        description:`If you want the user to know what tab they are on using, having a high contrast between the active & the inactive tabs would be helpful.`,
        code: 
        `
.one{
    border-radius: .5rem;
    padding: 1rem;
    transition: filter .2s ease-in;
}
.one:focus,.one:hover {
    filter: brightness(1.5);
}`,
    },
    {
        id:2,
        tag:`tab`,
        title:`Inverse Tab`,
        description:`If you want the user to know what tab they are on using, having a high contrast between the active & the inactive tabs would be helpful.`,
        code:`
.two{
    background-color: rgb(39 39 42);
    color: rgb(241 245 249);
    border-radius: .5rem;
    padding: 1rem;
    transition: background-color .2s ease-in;
}
.two:focus,.one:hover {
    background-color: rgb(241 245 249);
    color: rgb(39 39 42);
}
        `,
    },
    {
        id:3,
        tag:`tab`,
        title:"Bold Tab",
        description:`If you want to give contrast to hovered links increasing the font-weight is the simplest way possible.`,
        code: `
.three:hover{
    font-weight: 800;
}`,
    },
    {
        id:4,
        tag:`tab`,
        title:"Underline Tab",
        description:`This way may take a lot more lines of CSS but it gives you a lot more freedom in creating animations for the hover state.`,
        code: `
.four{
    border-radius: 0;
    position: relative;
    padding: 0 ;
}
.four::after{
    content: '';
    width: 0%;
    height: 0px;
    transition:all .2s ease-in;
}
.four:hover::after,.four:focus::after{
    width: 100%;
    height: 2px;
    background-color: rgb(167 139 250);
    position: absolute;
    bottom: 0px;
    left: 0;
}`,
    },
    {
        id:5,
        tag:`tab`,
        title:`Border Tab`,
        description:`Using a border can be a good visual to show the user that the element they are currently hovering over is interactable`,
        code:`
.five{
    border: solid 2px transparent;
    border-radius: .5rem;
    padding: 1rem 2rem;
    background-color: rgb(39 39 42);
    transition: border 1.5s ease-in;
}
.five:hover{
    border: solid 2px rgb(241 245 249);
}
        `,
    }
]

export const blocks = [
    {
        id:1,
        tag:`image`,
        intro:`Images are great assets to gain the interest of users as a wall of text would
                both overwhelm and bore most people. These following entries will show
                interesting way to use images to get the user attention to where you want it the most. `,
        title:"Info Image",
        description:`Use to connect a blurb of info that's related to an image.`,
        code: `
.infoBlock{
    position: relative;
    width: 150px;
    height: 150px;
    margin: 1rem auto;
    border-radius: 1rem;
}
.infoBlock p{
    text-align: center;
    position: absolute;
    bottom: 20%;
}`,
    },
    {
        id:2,
        tag:`image`,
        title:"Blur Image",
        description:`A fun way to bring attention to an element you want the user to intereact with.`,
        code: `
.blurBlock img{
    border-radius: 1rem;
    filter: blur(4px) sepia(25%);
    transition: filter .2s ease-in;
}
.blurBlock img:hover{
    filter: blur(0px) sepia(0%);
}`,
    },
]

export const errs = [
    {
        id:1,
        tag:`error`,
        intro:`Errors are bound to happen either due to user's input or server errors
                & it's very important to let the user know what's wrong. The following entries
                will show different ways to present the error message based on the type of error. `,
        title: `Error Message`,
        description:` Use as a pop-up element to let the user know that an error has occured. Ideally there would be a different error message based on what caused the error.`,
        code:`
.errBlock{
    padding: 0.5rem;
    background-color: rgb(254 202 202);
    border: 2px solid red;
    border-radius: 1rem;
    display:grid;
    grid-template-columns:repeat(6,1fr);
}
.errBtn{
    font-size: 1.25rem;
    color: rgb(153 27 27);
}
.errMsg{
    font-size: 1.5rem;
    color: rgb(239 68 68);
    grid-column: span 5/span 5;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
keyframes pulse {
    50% {
        opacity: .5;
    }
}
        `,
    },

]

export const loading = [
    {
        id:1,
        tag:`loading`,
        intro:`Loading is also bound to happen especially when your application involves fetching data
                from a server & the user's connection is slow. You would want to let the user know that 
                they only have to wait for your application to display the content & the following 
                entries shows different ways to show that content is loading. `,
        title:`Spinner Loading`,
        description:` A simple element to place while data is being loaded. Useful to use while fetching data. Note: with tailwind this animation only takes one class to implement.`,
        code:`
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
.animate-spin {
    animation: spin 1s linear infinite;
}`,
    },
    {
        id:2,
        tag:`loading`,
        title:`Skeleton Loading`,
        description:`A calming visual to have for the user as the components load in. The skeleton layout should match your website's layout. Note: with tailwind this animation only takes one class to implement.`,
        code:`
.container{
    display: grid;
    gap: 1rem;
}
.mainBox{
    padding: 3rem;
    background-color: rgb(156 163 175);
    border-radius: 1rem;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.paragraphBox{
    padding: 0.5rem
    background-color: rgb(156 163 175);
    border-radius: 1rem;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    50% {
        opacity: .5;
    }
}
        `,
    },
]