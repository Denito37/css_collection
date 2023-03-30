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