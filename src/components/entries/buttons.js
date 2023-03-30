
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