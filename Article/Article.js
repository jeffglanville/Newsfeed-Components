/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

const articles = document.querySelector('.articles');

data.map((a) => {
  return articles.appendChild(createArticle(a.title, a.date, a.firstParagraph, a.SecondParagraph, a.thirdParagraph))
})

function createArticle(title, date, p1, p2, p3) {

  const article = document.createElement('div');
  const articleTitle = document.createElement('h2');
  const articleDate = document.createElement('p');
  const articleParagraph1 = document.createElement('p');
  const articleParagraph2 = document.createElement('p');
  const articleParagraph3 = document.createElement('p');
  const expandButton = document.createElement('span');

  article.appendChild(articleTitle);
  article.appendChild(articleDate);
  article.appendChild(articleParagraph1);
  article.appendChild(articleParagraph2);
  article.appendChild(articleParagraph3);
  article.appendChild(expandButton);


  article.classList.add('article');
  articleDate.classList.add('date');
  expandButton.classList.add('expandButton');

  articleTitle.textContent = title;
  articleDate.textContent = date;
  articleParagraph1.textContent = p1;
  articleParagraph2.textContent = p2;
  articleParagraph3.textContent = p3;
  expandButton.textContent = 'Click to read the article';


  expandButton.addEventListener('click', (event) => {
    // article.classList.toggle('article-open');
    if(expandButton.innerHTML !="Close"){
      expandButton.innerHTML = 'Close';
    }else {
      expandButton.innerHTML = "Click to read the article";
    }
    event.target.parentElement.classList.toggle('article-open');
  })

  return article;
}

const myAdditionalContent = [{
  title: "Fun with Lambda",
  date: "Dec 10, 2019",
  firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis est cursus libero rutrum pellentesque. Proin sit amet nunc justo. Vestibulum mattis aliquam tincidunt. Vivamus imperdiet justo ut risus ornare imperdiet. Etiam consequat euismod enim ac varius. Aenean blandit varius mi, at sodales nisl bibendum quis. Nam convallis ultrices arcu sit amet luctus. Nunc condimentum mi sed venenatis convallis. Phasellus non mi vehicula, hendrerit lacus sed, dictum enim. Nullam fermentum nulla vel risus aliquet, vitae bibendum arcu iaculis. Quisque interdum, ipsum id molestie dapibus, sem nulla rutrum odio, vel porta tellus neque nec elit. Pellentesque porta neque sem, in lobortis libero volutpat vel. Nulla facilisi. Vivamus vel elit ex.",

  secondParagraph: "Needs to be sleeker you are lucky to even be doing this for us for doing some work for us probono will really add to your portfolio i promise remember, everything is the same or better so that's great, but can you make it work for ie 2 please. Anyway, you are the designer, you know what to do we are a non-profit organization, or can you make it faster? this turned out different that i decscribed. Can you turn it around in photoshop so we can see more of the front I really think this could go viral try making it a bit less blah for can we try some other colours maybe. Can you lower the price for the website? make it high quality and please use html can you make the font a bit bigger and change it to times new roman? jazz it up a little bit make the picture of the cupcake look delicious make the purple more well, purple-er it looks so empty add some more hearts can you add a bit of pastel pink and baby blue because the purple alone looks too fancy okay can you put a cute quote on the right side of the site? oh no it looks messed up! i think we need to start from scratch im not sure, try something else the flier should feel like a warm handshake. That's great, but we need to add this 2000 line essay. Use a kpop logo that's not a kpop logo! ugh make it pop so could you move it a tad to the left concept is bang on, but can we look at a better execution, nor I know somebody who can do this for a reasonable cost, nor we try your eye, but can you change everything?. Can we barter services? could you solutionize that for me, and this was not according to brief we are a non-profit organization. There is too much white space this looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue. Can you please change the color theme of the website to pink and purple? make the logo a bit smaller because the logo is too big can you link the icons to my social media accounts? oh and please put pictures of cats everywhere can you help me out? you will get a lot of free exposure doing this I think we need to start from scratch. Can you make it faster?. Make it sexy we exceed the clients' expectations we are a big name to have in your portfolio can you use a high definition screenshot so theres all this spanish text on my site. Can we barter services? I need a website. How much will it cost this looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue, but could you solutionize that for me. Just do what you think. I trust you you might wanna give it another shot submit your meaningless business jargon to be used on the site! can you punch up the fun level on these icons we are a startup, but it's great, can you add a beard though . ",

  thirdParagraph: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."
}, {
  title: "Office Fan Fair",
  date: "Dec 10, 2019",
  firstParagraph: "We need to have a Come to Jesus meeting with Phil about his attitude can you slack it to me? criticality . We need to aspirationalise our offerings back of the net, but target rich environment golden goose, for streamline. Reach out get buy-in, for you better eat a reality sandwich before you walk back in that boardroom, and post launch today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud circle back on your plate. Focus on the customer journey. We need to make the new version clean and sexy pixel pushing guerrilla marketing close the loop this is a no-brainer. We need to crystallize a plan talk to the slides nor you better eat a reality sandwich before you walk back in that boardroom conversational content circle back we need a recap by eod, cob or whatever comes first it's about managing expectations. Prioritize these line items let's unpack that later yet not enough bandwidth back-end of third quarter. Pull in ten extra bodies to help roll the tortoise nail it down thought shower I just wanted to give you a heads-up big picture. Crank this out this is not the hill i want to die on, yet three-martini lunch, so can you send me an invite? we need a recap by eod, cob or whatever comes first. Baseline collaboration through advanced technlogy not a hill to die on but draft policy ppml proposal ping me synergize productive mindfulness. Great plan! let me diarize this, and we can synchronise ourselves at a later timepoint organic growth, yet we should leverage existing asserts that ladder up to the message performance review or shotgun approach. Where do we stand on the latest client ask quantity.",

  secondParagraph: "Monocle ipsum dolor sit amet reprehenderit et flat white hand-crafted liveable minim smart intricate Baggu dolore joy veniam. First-class ANA Airbus A380 remarkable incididunt. Duis intricate impeccable classic destination Airbus A380. Dolore ullamco ANA, Lufthansa smart occaecat Airbus A380 Washlet Ginza sophisticated Singapore Tsutaya. Id delightful Sunspel proident perfect eiusmod pintxos. Tote bag id impeccable, ad ea artisanal alluring finest laboris in the best Tsutaya exercitation.",

  thirdParagraph: "Monocle ipsum dolor sit amet tsutaya punctual charming the best lovely exquisite Singapore international conversation. Signature Ettinger K-pop finest craftsmanship extraordinary. Joy alluring Zürich classic airport flat white ANA sharp the best Ettinger bulletin Winkreative. Uniforms premium hub alluring bulletin Swiss classic. Discerning soft power boulevard exquisite signature, impeccable hub concierge Ginza cutting-edge classic extraordinary Tsutaya iconic artisanal."
}, {
  title: "Time for Fun!",
  date: "Dec 10, 2019",
  firstParagraph: "On Wednesday, April 7, I dined with him at Sir Joshua Reynolds's. I have not marked what company was there. Johnson harangued upon the qualities of different liquors; and spoke with great contempt of claret, as so weak, that a man would be drowned by it before it made him drunk.' He was persuaded to drink one glass of it, that he might judge, not from recollection, which might be dim, but from immediate sensation. He shook his head, and said, 'Poor stuff! No, Sir, claret is the liquor for boys; port for men; but he who aspires to be a hero (smiling), must drink brandy. In the first place, the flavour of brandy is most grateful to the palate; and then brandy will do soonest for a man what drinking CAN do for him. There are, indeed, few who are able to drink brandy. That is a power rather to be wished for than attained. And yet, (proceeded he,) as in all pleasure hope is a considerable part, I know not but fruition comes too quick by brandy. Florence wine I think the worst; it is wine only to the eye; it is wine neither while you are drinking it, nor after you have drunk it; it neither pleases the taste, nor exhilarates the spirits.' I reminded him how heartily he and I used to drink wine together, when we were first acquainted; and how I used to have a head-ache after sitting up with him. He did not like to have this recalled, or, perhaps, thinking that I boasted improperly, resolved to have a witty stroke at me: 'Nay, Sir, it was not the WINE that made your head ache, but the SENSE that I put into it.' BOSWELL. 'What, Sir! will sense make the head ache?' JOHNSON. 'Yes, Sir, (with a smile,) when it is not used to it.'--No man who has a true relish of pleasantry could be offended at this; especially if Johnson in a long intimacy had given him repeated proofs of his regard and good estimation. I used to say, that as he had given me a thousand pounds in praise, he had a good right now and then to take a guinea from me.",

  secondParagraph: "On Thursday, April 8, I dined with him at Mr. Allan Ramsay's, with Lord Graham and some other company. We talked of Shakspeare's witches. JOHNSON. 'They are beings of his own creation; they are a compound of malignity and meanness, without any abilities; and are quite different from the Italian magician. King James says in his Daemonology, 'Magicians command the devils: witches are their servants. The Italian magicians are elegant beings.' RAMSAY. 'Opera witches, not Drury-lane witches.' Johnson observed, that abilities might be employed in a narrow sphere, as in getting money, which he said he believed no man could do, without vigorous parts, though concentrated to a point. RAMSAY. 'Yes, like a strong horse in a mill; he pulls better.' Lord Graham, while he praised the beauty of Lochlomond, on the banks of which is his family seat, complained of the climate, and said he could not bear it. JOHNSON. 'Nay, my Lord, don't talk so: you may bear it well enough. Your ancestors have borne it more years than I can tell.' This was a handsome compliment to the antiquity of the House of Montrose. His Lordship told me afterwards, that he had only affected to complain of the climate; lest, if he had spoken as favourably of his country as he really thought, Dr. Johnson might have attacked it. Johnson was very courteous to Lady Margaret Macdonald. 'Madam, (said he,) when I was in the Isle of Sky, I heard of the people running to take the stones off the road, lest Lady Margaret's horse should stumble.'",

  thirdParagraph: "Lord Graham commended Dr. Drummond at Naples, as a man of extraordinary talents; and added, that he had a great love of liberty. JOHNSON. 'He is YOUNG, my Lord; (looking to his Lordship with an arch smile,) all BOYS love liberty, till experience convinces them they are not so fit to govern themselves as they imagined. We are all agreed as to our own liberty; we would have as much of it as we can get; but we are not agreed as to the liberty of others: for in proportion as we take, others must lose. I believe we hardly wish that the mob should have liberty to govern us. When that was the case some time ago, no man was at liberty not to have candles in his windows.' RAMSAY. 'The result is, that order is better than confusion.' JOHNSON. 'The result is, that order cannot be had but by subordination.' On Friday, April 16, I had been present at the trial of the unfortunate Mr. Hackman, who, in a fit of frantick jealous love, had shot Miss Ray, the favourite of a nobleman. Johnson, in whose company I dined to-day with some other friends, was much interested by my account of what passed, and particularly with his prayer for the mercy of heaven. He said, in a solemn fervid tone, 'I hope he SHALL find mercy.' This day a violent altercation arose between Johnson and Beauclerk, which having made much noise at the time, I think it proper, in order to prevent any future misrepresentation, to give a minute account of it."
}];

myAdditionalContent.map((a) => {
  return articles.appendChild(createArticle(a.title, a.date, a.firstParagraph, a.SecondParagraph, a.thirdParagraph))
})