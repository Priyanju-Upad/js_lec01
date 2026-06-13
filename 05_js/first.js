const quotes = [
    "The best way to predict the future is to create it- Peter Drucker",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Be kind, for everyone you meet is fighting a hard battle.- Plato",
    "There is no charm equal to tenderness of heart.- Jane Austen",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr Seuss",
    "Be the change that you wish to see in the world- MK Gandhi",
    "A friend is someone who knows all about you and still loves you - Elbert Hubbard",
    "Always forgive your enemies; nothing annoys them so much. - Oscar Wilde",
    "We are all broken, that's how the light gets in. - Ernest Hemingway",
    "Life is tough my darling, but so are you. - Stephanie Bennett Henry",
     "Unable are the loved to die for love is immortality. - Emily Dickinson",
    "Let me live, love, and say it well in good sentences. - Sylvia Plath",
    "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
     "That it will never come again is what makes life so sweet. - Emily Dickinson",
     "It is never too late to be what you might have been. - George Eliot",
     "'Self-awareness and self-love matter. Who we are is how we lead. - Brene Brown",
    "Amateurs sit and wait for inspiration, the rest of us just get up and go to work. - Stephen King",
    "Beware; for I am fearless, and therefore powerful. — Mary Shelley, Frankenstein"
];


const button = document.querySelector('button');
const quote = document.querySelector('h1')
button.addEventListener('click',()=>{
  const index = Math.floor(Math.random()*19);
   
  quote.textContent = quotes[index];

})