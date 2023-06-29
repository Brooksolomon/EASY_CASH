<script>


	let count=0;
	const textarray=["Learning","Growing","Developing","Progressing"];
	const delayer=200;
	const erasedelay=100;
	const newTextDelay=2000;
	let words = 0;
	let chars = 0;
	let wordz = "";
	function type()
	{
		if(chars<textarray[words].length)
		{
			wordz+=textarray[words].charAt(chars);
			chars++;
			setTimeout(type,delayer);
		}
		else{
			setTimeout(erase,newTextDelay);
		}
	}
	function erase()
	{
		if(chars > 0)
		{
			wordz=textarray[words].substring(0,chars-1);
			chars--;
			setTimeout(erase,erasedelay);
		}
		else
		{
			words++;
			if(words >=textarray.length )
				words=0;
			setTimeout(type,delayer);
		}
	}

	 document.addEventListener( "DOMContentLoaded", function() 
	 {
		setTimeout(type,delayer+300);
	 });
	let selectedGoal=""
	 let listOfGoals=[{text:"Front end developer",value: false},{text:"Back end developer",value: false},{text:"Full stack developer",value: false},{text:"Data analyst",value: false}]
	function goalSelect(i)
	 {
		console.log
		for(let j=0;j<4;j++)
		{
			if(j!=i)
			{
				listOfGoals[j].value=false;
			}
			else
				listOfGoals[i].value=!(listOfGoals[i].value);

			
		}
		if(listOfGoals[i].value===true)
		selectedGoal=listOfGoals[i].text;
		else
		selectedGoal=""
		console.log(selectedGoal)
		
	 }
	
	let listOfLanguges = [{ id:0, text: 'assembly',value: false }
, { id:1, text: 'bash',value: false }
, { id:2, text: 'bootstrap',value: false }
, { id:3, text: 'c',value: false }
, { id:4, text: 'c#',value: false }
, { id:5, text: 'c++',value: false }
, { id:6, text: 'cobol',value: false }
,{ id:7, text: 'css',value: false }
, { id:8, text: 'dart',value: false }
, { id:9, text: 'django',value: false }
, { id:10, text: 'ember',value: false }
, { id:11, text: 'express',value: false }
, { id:12, text: 'flask',value: false }
, { id:13, text: 'fortran',value: false }
, { id:14, text: 'gdscript',value: false }
, { id:15, text: 'go',value: false }
, { id:16, text: 'haskell',value: false }
,{ id:17, text: 'html',value: false }
, { id:18, text: 'java',value: false }
, { id:19, text: 'javascript',value: false }
, { id:20, text: 'jquery',value: false }
, { id:21, text: 'laravel',value: false }
, { id:22, text: 'machine-code',value: false }
, { id:23, text: 'node.js',value: false }
, { id:24, text: 'python',value: false }
, { id:25, text: 'r',value: false }
, { id:26, text: 'react',value: false }
, { id:27, text: 'ruby',value: false }
, { id:28, text: 'ruby-on-rails',value: false }
, { id:29, text: 'rust',value: false }
, { id:30, text: 'scala',value: false }
, { id:31, text: 'spring',value: false }
, { id:32, text: 'sql',value: false }
, { id:33, text: 'svelte',value: false }
, { id:34, text: 'swift',value: false }
, { id:35, text: 'typescript',value: false }
, { id:36, text: 'vue.js',value: false }]
			let Filtered=[]
			let searchTerm="";
			
			Filtered = listOfLanguges
			
			const searchBooks = () => {	
		return Filtered = listOfLanguges.filter(languge => {
			let la = languge.text.toLowerCase();
			return la.includes(searchTerm.toLowerCase())
		});
	}		

			function caller()
			{
				searchBooks();
			}
	 		let selected = []
	 		function turnOn(id)
			{
				let m = Filtered.filter(F=>F.id==id)
				let i= Filtered.indexOf(m[0])
				if(Filtered[i].value == false){
				selected.push(Filtered[i].text);
				Filtered[i].value = true;
				}
				else{
					selected = selected.filter(select=> select!=Filtered[i].text);
					Filtered[i].value=false;
				}
				console.log(selected);
				
			}
			function Submit()
			{	
				let statment = " I know "
				for(let i=0;i<selected.length;i++)
				{
					if(i!=0)
					statment +=", " + selected[i];
					else
					statment += selected[i];
				}
				statment+=". give me an ordered list of three things i should learn after this to become a " + selectedGoal +  " and a link on where the best place to learn it is in a  tuple with keys languge and link enclosed in an array";
				console.log(statment);
			}
			

			
</script>

<main>
	<nav>
	<h1 class="logo">The map.</h1>
	<li>
		<ul>
			<a class="headlinks"href="#home">home</a>
		</ul>
		<ul>
			<a class="headlinks" href="#pick">get started</a>
		</ul>
		<ul>
			<a class="headlinks" href="https://www.google.com">contact us</a>
		</ul>
	</li>
	{#if selected.length > 0 && selectedGoal!=""}
	<button class="but" on:click={Submit}>Submit Choice</button>
	{/if}
	
	</nav>
	<section id="home">
	<div class="grid">
	<p class="item"><span style="font-size: 110px;"><b> A new way of<br> <span class="typed">{wordz}</span><span class="cursor">&nbsp;</span></span><br><br><br><br> <span style="color: #747f84;">Use our new and powerful AI tool to discover , track and improve your learning process in the tech world </span></p>
	<img class="item" src="mental.gif" alt="background">
	</div>
	</section>
	<section id="pick">
	<h1 class="select">Select what you wanna become</h1>
		<div class="goalclass">
		{#each listOfGoals as goals }
		{#if goals.value==true}
		<button class="thegoalsOn" on:click={()=>goalSelect(listOfGoals.indexOf(goals))}>{goals.text}</button>	
		{:else}
		<button class="thegoals" on:click={()=>goalSelect(listOfGoals.indexOf(goals))}>{goals.text}</button>
		{/if}
					
		{/each}
		</div>
	<h1 class="select">Select Languges you are already familiar with</h1>
	<div id="search-input">
		<input type="search" id="search-field"  placeholder="Enter Languge"  autocomplete="off" bind:value={searchTerm} on:input={caller} />
	</div> 

	<br><br>
	<div class="getstartedgird">
	<img src="tech.gif" alt="second">
	<div class="langgrid">
	{#if Filtered.length==0}
		<h3 style="padding-left:680px;">No results found</h3>
	{/if}
	{#each Filtered  as  lang (lang.id) }
	{#if lang.value== true}
	<button on:click={()=>turnOn(lang.id)} class="thelangugesOn">{lang.text}</button>
	{:else}
	<button on:click={()=>turnOn(lang.id)} class="thelanguges">{lang.text}</button>
	{/if}
	{/each}
	</div>
	</div>
	</section>
	<p>illustrations by<a href="https://icons8.com/illustrations/author/lZpGtGw5182N">Elisabet Guba</a> from <a href="https://icons8.com/illustrations">Ouch!</a></p>
	
</main>

<style>

.logo
{
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	padding-left: 50px;
	color: #444DFC;
}
li
{
	text-decoration: none;
	list-style-type: none;
	font-size: 25px;
	display:  flex;
	padding-left: 550px;
}

li a
{
	display: block;
	text-decoration: none;
	text-align: center;
	color: black;
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

li a:hover
{
	color: #444DFC;
	transition: .4s;
	
}
nav
{
	display:  flex;
	margin-bottom: 100px;
	background-color: white;
	position: sticky;
	top: 0px;
}
.grid
{
	display: inline-grid;
  grid-template-columns: auto auto;
  padding: 10px;
}
.item
{
	background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
.but
{
	background-color: white;
	border-color: #444DFC;
	margin-left: 500px;
	border-radius: 15px;
	border-width: 2px;
	font-size: 20px;
	cursor: pointer;
	
}
.but:hover
{
	background-color: #444DFC;
	transition: 0.2s;
	outline-offset: 10px;
	outline-width: 2px;
	outline-color:#444DFC;
	outline-style: auto;
	transition: 0.5s;
}
.cursor
{
	display: inline-block;
	background-color: #444DFC;
	width: 4px;
	margin-left: 5px;
	animation: blink 0.9s infinite;
}
.typed
{
	color: #444DFC;
}

@keyframes blink
{
	0%
	{
		background-color: #444DFC;
	}
	50%
	{
		background-color: transparent;
	}
	100%
	{
		background-color: #444DFC;
	}
}


.thelanguges
{
	background-color: rgba(255, 255, 255, 0.8);
  	padding: 20px;
  	font-size: 30px;
  	text-align: center;
	cursor: pointer;
	margin-left: 50px;
	margin-bottom: 50px;
	border: 2px solid #444DFC;
	border-radius: 15px;
	transition: 0.4s;
	padding: 20px;
}
.thelangugesOn
{
	background-color:#444DFC;
	color: white;
  	padding: 20px;
  	font-size: 30px;
  	text-align: center;
	cursor: pointer;
	margin-left: 50px;
	margin-bottom: 50px;
	border: 2px solid #444DFC;
	border-radius: 15px;
	transition: 0.4s;
	padding: 20px;
	outline-offset: 10px;
	outline-width: 2px;
	outline-color:#444DFC;
	outline-style: auto;
	transition: 0.5s;
}

.thelanguges:hover
{
	
	color: #444DFC;
	outline-offset: 10px;
	outline-width: 2px;
	outline-color:#444DFC;
	outline-style: auto;
	transition: 0.5s;
}
.thelangugesOn:hover
{
	color: black;
	outline-offset: 10px;
	outline-width: 2px;
	outline-color:#444DFC;
	outline-style: auto;
	transition: 0.5s;
}

.langgrid
{
	/* margin-left: 120px; */
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	text-align: center;
}
.select
{
	text-align: center;
	font-size: 60px;
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.getstartedgird
{
	display: inline-grid;
  	grid-template-columns: auto auto;
	text-align: center;
}
#search-field
{
	width: 60%;
	height: 60px;
	text-align: center;
	transform: translate(60%,0%);
	border-color: #444DFC;
	border-radius: 15px;
	background-image: url('search.png');
	background-position: 10px 5px;
  	background-repeat: no-repeat;
	transition: width 0.4s ease-in-out;

}

.thegoals
{
	text-align: center;
	background-color: rgba(255, 255, 255, 0.8);
  	padding: 20px;
  	font-size: 30px;
  	text-align: center;
	cursor: pointer;
	margin-left: 50px;
	margin-bottom: 50px;
	border: 2px solid #444DFC;
	border-radius: 15px;
	transition: 0.4s;
	padding: 20px;
}
.thegoals:hover
{
	color: #444DFC;
	outline-offset: 10px;
	outline-width: 2px;
	outline-color:#444DFC;
	outline-style: auto;
	transition: 0.5s;	
}
.thegoalsOn
{
	background-color:#444DFC;
	color: white;
  	padding: 20px;
  	font-size: 30px;
  	text-align: center;
	cursor: pointer;
	margin-left: 50px;
	margin-bottom: 50px;
	border: 2px solid #444DFC;
	border-radius: 15px;
	transition: 0.4s;
	padding: 20px;
	outline-offset: 10px;
	outline-width: 2px;
	outline-color:#444DFC;
	outline-style: auto;
	transition: 0.5s;
}

.thegoalsOn:hover
{
	color: black;
	outline-offset: 10px;
	outline-width: 2px;
	outline-color:#444DFC;
	outline-style: auto;
	transition: 0.5s;
}
.goalclass
{
	margin-left: 280px;
}


</style>



