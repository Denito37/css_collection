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