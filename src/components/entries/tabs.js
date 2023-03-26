export const tabs = [
    {
        id:1,
        title:"Higlight Tab ",
        description:`When u have a large amount of related content it could be a good idea to divide them into different tabs that rotate in & out`,
        code: 
        `
.one{
    border-radius: .5rem !important;
}
.one:focus,.one:hover {
    filter: brightness(1.4);
}`,
    },
    {
        id:2,
        title:"Bold Tab",
        description:`When u have a large amount of related content it could be a good idea to divide them into different tabs that rotate in & out`,
        code: `
.two:hover,.two:focus{
    font-weight: 800;
}`,
    },
    {
        id:3,
        title:"Underline Tab",
        description:`When u have a large amount of related content it could be a good idea to divide them into different tabs that rotate in & out`,
        code: `
.three{
    border-radius: 0 !important;
    position: relative;
    padding: 0 !important;
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
    bottom: 10px;
    left: 0;
}`,
    },
    {
        id:4,
        title:"",
        description:``,
        code: ``,
    },
]