export const buttons = [
    {
        id:1,
        title:"Trash Button",
        description:`Good to use for actions common in an application such as deleting your work.`,
        code: `
.trash{
    background-color: transparent;
    border-radius: 50%;
    transform: scale(.9);
    transition: background-color .2s ease-in, 
                transform .2s ease-in;
}
.trash:hover{
    background-color: var(--acc-clr);
    transform: scale(1);
}`,
    },
    {
        id:2,
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
        title:"Claim Button",
        description:`Visually appealing way to tell the user that you can intereact with this element`,
        code: `
.claim{
    background-color: #222;
    border: solid 2px #222;
    color: #eee;
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
        title:"Submit Button",
        description:`Alternative way to use to tell the user that you can intereact with this element.
                    Note: Can mess up the layout of your site if not used carefully`,
        code: `
.submit{
    background-color: transparent;
    border: solid 1px #222;
    color: #eee;
    padding: 1.5rem 2.5rem;
    border-radius: 1rem;
    transition: border .2s ease-in;
}
.submit:hover{
    border: 4px solid #222;
}`,
    },
    {
        id:5,
        title:"CTA Button",
        description:`Put call to action content activation on click such as a contact component`,
        code:`
.cta{
    background-color: #252525;
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-weight: 800;
    z-index: 2;
    transition: transform .2s ease-in, 
                color .2s ease-in;
}
.cta:hover{
    transform: scale(1.25);
    color: var(--acc-clr)
}`,
    },
]

export const tabs = [
    {
        id:1,
        title:"Higlight Tab ",
        description:`When u have a large amount of related content it could be a good idea to divide them into different tabs.
                    If you want the user to know what tab they are on using, having a high contrast between the active & the inactive tabs would be helpful.`,
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
        title:"Bold Tab",
        description:`When u have a large amount of related content it could be a good idea to divide them into different tabs.
                    If you want to give contrast to hovered links incresing the font-weight is the simplest way possible.`,
        code: `
.two:hover{
    font-weight: 800;
}`,
    },
    {
        id:3,
        title:"Underline Tab",
        description:`When u have a large amount of related content it could be a good idea to divide them into different tabs.
                    This way may take a lot more lines of CSS but it gives you a lot more freedom in creating animations for the hover state.`,
        code: `
.three{
    border-radius: 0;
    position: relative;
    padding: 0 ;
}
.three::after{
    content: '';
    width: 0%;
    height: 0px;
    transition:all .2s ease-in;
}
.three:hover::after,.three:focus::after{
    width: 100%;
    height: 2px;
    background: var(--acc-clr);
    position: absolute;
    bottom: 0px;
    left: 0;
}`,
    },
]

export const blocks = [
    {
        id:1,
        title:"Info Block",
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
        title:"Blur Block",
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
        title: `Error Message`,
        description:` Use as a pop-up element to let the user know that an error has occured. Ideally there would be a different error message based on what caused the error.`,
        code:`
.errBlock{
    padding: 0.5rem;
    background-color:#;
    border: 2px solid red;
    border-radius: 1rem;
    display:grid;
    grid-template-columns:repeat(6,1fr);
}
.errBtn{
    font-size: 1.25rem;
    color:#;
}
.errMsg{
    font-size: 1.5rem;
    color:#;
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
]