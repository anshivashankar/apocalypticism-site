// code adapted from: https://reactjs.org/docs/add-react-to-a-website.html

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;

const e = React.createElement;

class IntroCard extends React.Component {
  render() {
    var divStyle = {width: "18rem", margin: "30px", overflow: "hidden"}
    return (
    <div className="card" style={divStyle}>
      <img className="card-img-top" src={this.props.img} alt="Modern Media" />
      <div className="card-body">
        <h5 className="card-title">{this.props.title}</h5>
        <p className="card-text">{this.props.desc}</p>
        <a href={this.props.link} className="btn btn-primary">Explore {this.props.title}</a>
      </div>
    </div>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return <div className="row">
      <IntroCard title="Fallout" link="/fallout" img="./Fallout-4-1-2.jpg" desc="Fallout is a post-apocalyptic video game series where the player controlls a character in, you guessed it, a post-nuclear-war America." />

      <IntroCard title="The Walking Dead" link="/walkingdead" img="./walking_dead.jpg" desc="The Walking Dead is originally a comic book about Rick Grimes and his struggles to survive the recent zombie apocalypse."/>

      <IntroCard title="The Matrix" link="/matrix" img="./pill_matrix.jpg" desc="The Matrix move trillogy explores the concept of simulations blended with reality."/>

      <IntroCard title="The Last of Us" link="/lastofus" img="./the-last-of-us1.jpg" desc="The Last of Us is a video game that explores humanity 20 years after the zombie apocalypse."/>

      <IntroCard title="Death Note" link="/deathnote" img="./death_note.jpg" desc="Death Note is a graphic novel/TV show/Netflix movie based on the idea of a notebook granting the user the ability to kill at will."/>

    </div>;
  }
}

class About extends React.Component {
  render() {
    return (
    <div>
      <h1> About this project:</h1>
      <p> This website was made for PHIL 1260 - Apocalypticism in Film by Ashwin ShivaShankar.</p>
      <p> It is intended to inform the reader about a variety of different apocalyptic media, as well as some symbolism and imagery that exists in each work.</p>
      <p> There is no obvious grouping to this list, other than all of these titles relating to apocalyptic media. </p>
      <h2> Image sources: </h2>
      <p> https://ksassets.timeincuk.net/wp/uploads/sites/54/2015/11/Fallout-4-1-2.jpg </p>
      <p> https://images-na.ssl-images-amazon.com/images/I/71HE5gazkLL.jpg </p>
      <p> https://orion-uploads.openroadmedia.com/md_512d298823ec-lg_f151b73b3ad9-the-walking-dead-comics.jpg </p>
      <p> http://pre01.deviantart.net/618c/th/pre/i/2013/159/7/5/lab_coat_by_capmac-d5zkusq.jpg </p>
      <p> https://www.gameskinny.com/p0i5z/sorry-but-i-liked-fallout-new-vegas-better-than-fallout-4 </p>
      <p> https://cdn-images-1.medium.com/max/1200/1*mEaY44fnlGBJlG1_sFDSjQ.jpeg </p>
      <p> https://i.pinimg.com/474x/34/1f/3c/341f3cc937d9fffdc9c990ddca825641--power-walking-comic-character.jpg </p>
      <p> https://www.knowyourmobile.com/sites/knowyourmobilecom/files/2016/10/the-last-of-us1.jpg </p>
      <p> https://dingo.care2.com/pictures/petition_images/petition/188/907194-1490205999-wide.jpg</p>
      <p> https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOhJMhGayn4AbKE7evEL4zMnIA_ZOnDkHdyUlayK0W0sS2CLk </p>
      <p> https://mattbelair.com/wp-content/uploads/2017/09/1dd6f785c248b6b67f4cddd5ab951341-1080x675.jpg </p>
      <p> https://img1.looper.com/img/gallery/the-ending-of-the-matrix-trilogy-explained/intro-1523029893.jpg </p>
      <p> https://cdn.gearnuke.com/wp-content/uploads/2014/07/the-last-of-us-remastered-ps4-3.jpg </p>
      <p> https://fextralife.com/wp-content/uploads/2013/08/last-of-us-review-ps3-ps4-multiplayer-min.jpg</p>
      <p> https://uploads.disquscdn.com/images/fa4dca598dbafe32710e207359a375bc6bf8e6e115fba7596e7858821371e71a.jpg </p>
    </div>
    );
  }
}

class Carousel extends React.Component {
  render() {
    var styleTag = {textShadow: "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black"};
    var carouselStyle = {minHeight: "500px"}
    return <div align="center">
    <div className="bd-example">
      <div id="carouselFallout" className="carousel slide w-75" data-ride="carousel" data-interval="10000" style={carouselStyle}>
        <ol className="carousel-indicators">
          <li data-target="#carouselFallout" data-slide-to="0" className="active"></li>
          <li data-target="#carouselFallout" data-slide-to="1"></li>
          <li data-target="#carouselFallout" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={this.props.first_src} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={styleTag}>{this.props.first_cap_head}</h5>
              <p style={styleTag}>{this.props.first_cap_foot}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={this.props.second_src} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={styleTag}>{this.props.second_cap_head}</h5>
              <p style={styleTag}>{this.props.second_cap_foot}</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={this.props.third_src} className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h5 style={styleTag}>{this.props.third_cap_head}</h5>
              <p style={styleTag}>{this.props.third_cap_foot}</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselFallout" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselFallout" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    </div>;
  }
}


// Below is each page.

// Fallout

class Fallout extends React.Component {

  render() {
    return(<Carousel 
      first_src="./Fallout-4-1-2.jpg"
      first_cap_head="The Playable Character"
      first_cap_foot="In the more modern Fallout games, the player has the ability to create their own unique character, allowing them to customize as they see fit."
      second_src="./lab_coat_by_capmac-d5zkusq.jpg"
      second_cap_head="Followers of the Apocalypse"
      second_cap_foot="This group within the Fallout world attempt to restore humanity though the preservation of scientific progress. This goal is very different than other groups, many of whom attempt to secure power through violent means."
      third_src="./29gdmuj.jpg"
      third_cap_head="Player Choice"
      third_cap_foot="The player has the ability to choose who they align with. In addition, many of the games boast different endings based on the players' choices." />
    );
  }
}

class WalkingDead extends React.Component {
  render() {
    return(<Carousel 
      first_src="./walking_dead.jpg"
      first_cap_head="Writing and Art"
      first_cap_foot="The Walking Dead graphic novels are written by Robert Kirkman and had art drawn by Tony Moore and Charlie Adlard."
      second_src="./71HE5gazkLL.jpg"
      second_cap_head="Volumized storytelling"
      second_cap_foot="The stories are separated out into Volumes, each consisting of 6 issues. Each Volume has a discrete story line, similar to seasons of a TV show."
      third_src="./walking-comic-wshow.jpg"
      third_cap_head="Comics vs Show"
      third_cap_foot="There are several notable differences in storytelling between the two mediums, even though they follow similar characters. For example, the comics are not bound by actor contracts, and can keep or remove characters at will."/>
    );
  }
}

class Matrix extends React.Component {
  render() {
    return(<Carousel 
      first_src="./pill_matrix.jpg"
      first_cap_head="Red Pill/Blue Pill"
      first_cap_foot="Ignorance is bliss is a common theme in the first Matrix movie. This is best expemplified with the blue pill/red pill decision, where Neo(the protagonist) has to decide wether he wants to live in ignorance or suffer the truth."
      second_src="./matrix.jpg"
      second_cap_head="Simulation"
      second_cap_foot="If we are indeed living in a simulation, the Matrix argues that it is nearly impossible to detect. This mirrors Plato's Allegory of the Cave."
      third_src="./neo.jpg"
      third_cap_head="Neo as a Christ-like figure"
      third_cap_foot="Neo as a character has often been compared to a Christ-like figure. As well as being referred as 'The One', Neo's arc and story mirrors Jesus' story in many ways, such as the prophetic coming, the betrayal, and his sacrifice."/>
    );
  }
}

class LastOfUs extends React.Component {
  render() {
    return(<Carousel 
      first_src="./the-last-of-us1.jpg"
      first_cap_head="Writing in Video Games"
      first_cap_foot="Unlike the open world of Fallout, The Last of Us Follows a movie-like rigid story structure. The is highly interactive, but once one chapter is completed, the player is unable to go back. This sort of gameplay lends itself to a tight, well-paced story."
      second_src="./the-last-of-us-remastered-ps4-3.jpg"
      second_cap_head="Volumized storytelling"
      second_cap_foot="The world of The Last of Us is quite similar to The Walking Dead, and not just because of the zombies. Both explore ideas of humanity at its lowest by using zombies as a never-ending threat to push humans to commit such atrocities."
      third_src="./the-last-of-us-infected.jpg"
      third_cap_head="Zombies as a plot device"
      third_cap_foot="In The Last of Us, zombies (or infected, as they are known in the game) are not the only threat. The main characters encounter several different groups of human survivors, giving the writers a blank slate to explore the varied sides of humanity."/>
    );
  }
}

class DeathNote extends React.Component {
  render() {
    return(<Carousel 
      first_src="./death_note.jpg"
      first_cap_head="One Core Concept"
      first_cap_foot="Death Note is an apocalyptic story that has seen different iterations in various forms of media. It was originally a Japanese graphic novel that was adapted into an animated series. Overall, the core of the story, where a high school student gains access to a notebook that kills anyone whose name is written in it, is the same."
      second_src="./death_note_comparison.jpg"
      second_cap_head="A Mix of Media"
      second_cap_foot="Death Note was originally a Japanese graphic novel that was adapted into an animated series. Recently, Netflix has created a live-action movie based on the concept. Death Note is an excellent case study in contrasting different mediums affecting the overall story."
      third_src="./apple_of_eden.jpg"
      third_cap_head="Religious Imagery"
      third_cap_foot="Death Note has a significant amount of Christian imagery. For example, the main protagonist acts as an anti-hero, judging and killing those he deems unrighteous. He often compares himself as the God of the world, bringing to mind the judgement of the wicked by the Christian diety."/>
    );
  }
}

// Below is the rendering code.

const domContainer = document.querySelector('#content');

ReactDOM.render(
  <Router history={browserHistory}>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>

    <Route path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path ="/fallout" component={Fallout} />
    <Route path="/walkingdead" component={WalkingDead} />
    <Route path="/matrix" component={Matrix} />
    <Route path="/lastofus" component={LastOfUs} />
    <Route path="/deathnote" component={DeathNote} />
    <Route path="*" component={Home} />
  </Router>,
  domContainer
);


