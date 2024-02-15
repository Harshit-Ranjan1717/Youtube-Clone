var nameList = [
    'Time','Past','Future','Dev',
    'Fly','Flying','Soar','Soaring','Power','Falling',
    'Fall','Jump','Cliff','Mountain','Rend','Red','Blue',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper','Deepest',
    'Mine','Your','Worst','Enemy','Hostile','Force','Video',
    'Game','Donkey','Mule','Colt','Cult','Cultist','Magnum',
    'Gun','Assault','Recon','Trap','Trapper','Redeem','Code',
    'Script','Writer','Near','Close','Open','Cube','Circle',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Money','Cash','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Ice','Cold','Rotten','Sick','Sickly','Janitor','Camel','Rooster',
    'Sand','Desert','Dessert','Hurdle','Racer','Eraser','Erase','Big',
    'Small','Short','Tall','Sith','Bounty','Hunter','Cracked','Broken',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Sandwich','Smasher','Extreme','Multi','Universe','Ultimate','Death','Ready','Monkey','Elevator','Wrench','Grease','Head','Theme','Grand','Cool','Kid','Boy','Girl','Vortex','Paradox'
];

export const comments = [
  "Awesome video! Thanks for sharing!",
  "This content is gold!",
  "I learned so much. Great job!",
  "Hit like if you enjoyed!",
  "Subscribed! More videos, please.",
  "Incredible work. Keep it up!",
  "This helped me a lot. Thanks!",
  "Thumbs up for the quality content!",
  "Fantastic explanation. Clear and concise!",
  "Love your channel. Always informative!",
  "Great tutorial. Simplifies complex concepts.",
  "You make learning enjoyable. Thank you!",
  "Brilliant! Explained like a pro.",
  "Amazing. Can't wait for the next one!",
  "Mind-blowing content. Kudos!",
  "You deserve millions of subscribers!",
  "Epic video. Instantly subscribed!",
  "Informative and well-presented. Thumbs up!",
  "You're making a difference. Thank you!",
  "This changed my perspective. Wow!",
  "Your videos are my study buddy!",
  "Simple and effective. Great work!",
  "You're a lifesaver. Thank you!",
  "I wish I found this sooner.",
  "You're a genius! Thanks a ton!",
  "Exactly what I needed. Thank you!",
  "Your energy is contagious. Love it!",
  "You simplify the complex. Amazing!",
  "The world needs more tutorials like these.",
  "I appreciate your dedication. Thanks!",
  "Keep rocking! Can't get enough.",
  "Your voice is soothing. Subscribed!",
  "Well explained. Easy to follow.",
  "This made my day. Thank you!",
  "I can't stop watching your videos!",
  "You've got a new fan!",
  "This is gold. Subscribed instantly!",
  "You're a blessing to learners. Thanks!",
  "You deserve all the likes!",
  "Your channel is a treasure trove!",
  "This tutorial is a game-changer!",
  "Thanks for sharing your knowledge!",
  "You make learning fun and easy.",
  "A masterpiece of a tutorial!",
  "The world needs more educators like you.",
  "Thoroughly enjoyed this. More, please!",
  "You're making a positive impact!",
  "Your explanations are crystal clear.",
  "You're a coding superhero. Thanks!",
  "I wish I could give more likes!",
  "Absolutely fantastic content!",
  "Your content makes my day brighter.",
  "You make learning a joy!",
  "I admire your teaching style.",
  "You're a legend. Thank you!",
  "This is pure gold. Thank you!",
  "Your videos inspire me to learn.",
  "Your tutorials are a lifesaver!",
  "You're my go-to for learning.",
  "Incredible content as always!",
  "I'm learning so much from you.",
  "Your videos are a work of art!",
  "You're a true educator. Thanks!",
  "I look forward to your uploads!",
  "You're making a difference in education.",
  "This is what YouTube needs more of!",
  "I can't express how helpful this is!",
  "Your knowledge is invaluable. Thanks!",
  "This is exactly what I was looking for.",
  "I'm grateful for your tutorials!",
  "Your content is a blessing!",
  "This tutorial is a game-changer!",
  "I've learned a lot from you.",
  "Your teaching is exceptional. Thanks!",
  "You're my coding mentor!",
  "This video is a gem. Thank you!",
  "You explain things so well!",
  "I can't thank you enough!",
  "Your videos are a masterclass.",
  "You're my coding hero!",
  "This helped me a ton. Thanks!",
  "You're a coding wizard!",
  "This is gold. Thank you!",
  "Your videos are my go-to resource!",
  "You're a true educator. Kudos!",
  "I'm hooked on your tutorials!",
  "This is what educational content should be!",
  "Your tutorials are a game-changer!",
  "You're a legend in the making!",
  "This content is changing lives. Thanks!",
  "You're a coding genius!",
  "This tutorial is pure gold!",
  "Your videos are a lifesaver!",
  "You're a true inspiration. Thanks!",
  "Incredibly helpful. Much appreciated!",
  "This video deserves millions of views!",
  "You're the best teacher ever!",
  "This is the content I needed!",
  "Your tutorials are a gift to learners!",
  "You make learning enjoyable and fun!",
  "This video made my day. Thanks!",
  "You're a beacon of knowledge. Thanks!",
  "Your tutorials are a treasure trove!",
  "You're my coding role model!",
  "This is educational gold. Thanks!",
  "You're a coding legend in the making!",
  "Your content is a blessing to learners!",
  "You're making a positive impact. Thanks!",
  "This video is a masterpiece!",
  "You're the hero of coding learners!",
  "This tutorial is a work of art!",
  "Your videos are a source of inspiration!",
  "You're a coding mentor to many!",
  "This content is a game-changer. Thanks!",
  "You're a true gem in the coding community!",
  "This video deserves endless applause!",
  "Your tutorials are my coding sanctuary!",
  "You're a coding wizard. Thanks!",
  "This is the best tutorial ever!",
  "You're my coding superhero. Thanks!",
  "This video is a beacon of knowledge!",
  "You're the coding guru we need!",
  "This tutorial is a masterpiece. Thanks!",
  "Your videos are my coding compass!",
  "You're the coding mentor we all need!",
  "This content is a treasure chest of knowledge!",
  "You're a coding genius. Thanks!",
  "This video is a coding masterpiece!",
  "You're the coding hero of our time!",
  "This tutorial is a coding revelation!",
  "Your videos are a coding inspiration!",
  "You're the coding mentor we aspire to be!",
  "This content is a coding masterpiece!",
  "You're the coding legend we look up to!",
  "This video is a coding gem!",
  "You're the coding mentor of our dreams!",
  "This tutorial is a coding triumph!",
  "Your videos are a coding treasure!",
  "You're the coding guru of the century!",
  "This content is a coding miracle!",
  "You're the coding hero we all need!",
  "This video is a coding marvel!",
  "You're the coding mentor we admire!",
  "This tutorial is a coding wonder!",
  "Your videos are a coding delight!",
  "You're the coding genius we respect!",
  "This content is a coding revelation!",
  "You're the coding wizard we love!",
  "This video is a coding inspiration!",
  "You're the coding hero we applaud!",
  "This tutorial is a coding masterpiece!",
  "Your videos are a coding treasure!",
  "You're the coding mentor we appreciate!",
  "This content is a coding gem!",
  "You're the coding legend we follow!",
  "This video is a coding triumph!",
  "You're the coding guru we honor!",
  "This tutorial"]

export function generateRandomName() {
   return nameList[Math.floor( Math.random() * nameList.length )];
};

export function makeRandomSentences() {
  return comments[Math.floor( Math.random() * nameList.length )];
}
































export function findNthPrime(n) {
  if (n < 1) {
    return 0
  }

  let count = 0;
  let candidate = 1;

  while (count < n) {
    candidate++;

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(candidate); i++) {
      if (candidate % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count++;
    }
  }

  return candidate;
}

