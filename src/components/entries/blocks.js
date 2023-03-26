export const blocks = [
    {
        id:1,
        title:"Info Block",
        description:`Use to connect a blurb of info that related to an image`,
        code: `
.infoBlock{
    position: relative;
    width: 300px;
    height: 300px;
    margin: 1rem auto;
    -webkit-border-radius:0;
    border-radius: 1rem;
    transition: outline .15s ease-out;
}
.infoBlock p{
    text-align: center;
    position: absolute;
    bottom: 15%;
    left: 20%;
    right: 20%;
}`,
    },
    {
        id:2,
        title:"Blur Block",
        description:`A fun way to bring attention to an element you want the user to intereact with.`,
        code: `
.blurBlock img{
    -webkit-border-radius:0;
    border-radius: 1rem;
    filter: blur(4px) sepia(25%);
    transition: filter .2s ease-in;
}
.blurBlock img:hover{
    filter: blur(0px) sepia(0%);
}`,
    },
    {
        id:3,
        title:"",
        description:``,
        code: ``,
    },
    {
        id:4,
        title:"",
        description:``,
        code: ``,
    },
]