<script>	

	

	let users =[]
	let reciverdoesntexist=false
	let requestabovebalance = false
	
	fetch('http://localhost:3000/user',
	{
		method:'GET'
	}).then(response=>response.json()).then((data)=>{ 
  data.map((item)=>{ 


    users.push(item);
  		})
				})
	console.log(users)
	let found=false
	let success = false
	function validatereciver(){
		for (let name of users)
		{
			if (name.username == recivingusername){
				found=true
				break
			}
			
		}
		if (found){
			reciverdoesntexist=false
			if (transferammount <= currentbalance) 
			{
				requestabovebalance = false
				users.filter(F=>F.username==enteredusername)[0].balance -= transferammount;
				users.filter(F=>F.username==recivingusername)[0].balance += parseInt(transferammount);
				console.log(users.filter(F=>F.username==recivingusername)[0].balance)
				currentbalance=users.filter(F=>F.username==enteredusername)[0].balance
				success=true;
				var userBalance = users.filter(F=>F.username==enteredusername)[0].balance;
				var user2Balance= users.filter(F=>F.username==recivingusername)[0].balance;
   fetch(`http://localhost:3000/user/${enteredusername}`,
  {

    method:'PUT',
       mode: 'cors',
      cache: 'default',
    headers:{
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({"balance":userBalance})  
  });


	fetch(`http://localhost:3000/user/${recivingusername}`,
  {

    method:'PUT',
       mode: 'cors',
      cache: 'default',
    headers:{
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({"balance":user2Balance})  
  });
			}
			else
				requestabovebalance=true
		}
		else
		reciverdoesntexist = true

	}
	function loggingout()
	{
		success=false
		loggedin=false
		reciverdoesntexist=false
		requestabovebalance=false

	}


	
	//initallize all the info in the table
	let signedup=true;
	let loggedin=false;
	let wrongpass=false;
	let wrongacc=false;
	let sendmoney = true;
	function switcher()
	{
		signedup = !signedup;
	}

	

	let enteredusername="",enteredpassword="",currentbalance=0;
	let x= false;
	function validateaccount()
	{
		for (let user of users)
		{
			if (user.username==enteredusername)
			{
				x=true;
				if(user.password==enteredpassword)
				{
					loggedin=true;
					currentbalance=users.filter(F=>F.username==enteredusername)[0].balance
					break;
				}
				else
				{
					wrongpass=true
				}
			}
			
		}
		if (x == false)
		{
			wrongacc=true
		}
		else{wrongacc=false}



	}
	function sendmoneyfunction()
	{
		sendmoney=true;
	}
	function recivemoneyfunction()
	{
		sendmoney=false;
	}
	let recivingusername="";
	let transferammount=0;


	let count=0;
	const textarray=["Paying","Sharing","Living"];
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
</script>

<main>
	<nav>
		<h1 class="logo">Easy cash.</h1>
		<li>
			<ul>
				<button class="but">Get started</button>
			</ul>
		</li>
		</nav>
		<section id="home">
			<div class="grid">
			<img class="item" src="cards.png" alt="background" style="padding-left: 100px;">
			<p class="item"><span style="font-size: 110px;"><b> A new way of<br> <span class="typed">{wordz}</span><span class="cursor">&nbsp;</span></span><br><br><br><br> <span style="color: #747f84;">Use our new and powerful application to send money to family and friends easily </span></p>
			<img class="item" src="pay.png" alt="background">
			</div>
			</section>

		<section>
			{#if loggedin==false}
			<h1 class="startedtext">Get started</h1>
			<p class="startedcaption">hey there enter information so that we can get started</p>
			{#if signedup==false}
			<form>
					
				<input type="text" placeholder="Username" autocomplete="off" class="inputfeilds" required/>
				<input type="password" placeholder="Password" autocomplete="off" class="inputfeilds" required/>
				<input type="password" placeholder=" Repeat Password" autocomplete="off" class="inputfeilds" required/>
				<input type="tel" placeholder="Phone no" autocomplete="off" class="inputfeilds" required/>
				<input type="email" placeholder="Email" autocomplete="off" class="inputfeilds" required/>
				<button class="but">Sign up</button>
			</form>
			<button on:click={switcher} class="accountswitch" >aleady have an account?</button>
			{:else}
				{#if wrongpass==true}
				<h3 style="text-align: center;color:red;">entered the wrong password , please try again</h3>
				{/if}
				{#if wrongacc==true}
				<h3 style="text-align: center;color:red;">The account you entered doesnt exist, please try again</h3>
				{/if}
				<input type="text" placeholder="Username"  class="inputfeilds" required bind:value={enteredusername}/>
				<input type="password" placeholder="Password" autocomplete="off" class="inputfeilds" required bind:value={enteredpassword}/>
				<button class="but" on:click={validateaccount}>Sign in</button>
			<button on:click={switcher} class="accountswitch">Dont have an account ?</button>
			{/if}
			{:else}
				<h3 style="text-align: center;">Welcome {enteredusername}. have a good day</h3>
				<p style="text-align: center; font-size:60px;">Your current balance is <span style="color: #5ab7ff;">{currentbalance}</span> birr</p>
				<div class="radio-inputs" style="margin-bottom: 30px;">
					<label class="radio">
					  <input type="radio" name="radio" checked="true" on:click={sendmoneyfunction}>
					  <span class="name">Send money</span>
					</label>
					<label class="radio">
					  <input type="radio" name="radio" on:click={recivemoneyfunction}>
					  <span class="name">Reqest money</span>
					</label>
				  </div>
				{#if sendmoney==true}
				{#if reciverdoesntexist==true}
				<h3 style="text-align: center;color:red;">the user you entered doesnt exist </h3>
				{/if}
				{#if requestabovebalance==true}
				<h3 style="text-align: center;color:red;">you tried to send more money than there is in your balance</h3>
				{/if}
				{#if success==true}
				<h3 style="text-align: center;color:green;">successfully sent!</h3>
				{/if}
				  
				<input type="text" placeholder="reciver Username"  class="inputfeilds" required bind:value={recivingusername}/>
				<input type="text" placeholder="Transfer ammount"  class="inputfeilds" required bind:value={transferammount}/>
				<input type="text" placeholder="reason (optional)" class="inputfeilds"  />
				<button class="but" on:click={validatereciver}>Send</button>
				<button on:click={loggingout} class="accountswitch">logout</button>
				{:else}
				<input type="text" placeholder="request reciver"  class="inputfeilds"/>
				<input type="text" placeholder="request ammount"  class="inputfeilds"/>
				<input type="text" placeholder="reason (optional)" class="inputfeilds" />
				<button class="but" on:click={validatereciver}>Send</button>
				{/if}  
			{/if}


		</section>
</main>
<style>
.logo
{
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	padding-left: 50px;
	color: #5ab7ff;
	font-size: 30px;
}
li
{
	text-decoration: none;
	list-style-type: none;
	font-size: 25px;
	display:  flex;
	padding-left: 550px;
}


nav
{
	display:  flex;
	margin-bottom: 100px;
	background-color: white;
}
.grid
{
	display: inline-grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
}
.item
{
		background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
.cursor
{
	display: inline-block;
	background-color: #5ab7ff;
	width: 4px;
	margin-left: 5px;
	animation: blink 0.9s infinite;
}
.typed
{
	color: #5ab7ff;
}

@keyframes blink
{
	0%
	{
		background-color: #5ab7ff;
	}
	50%
	{
		background-color: transparent;
	}
	100%
	{
		background-color: #5ab7ff;
	}
}
.but
{
	background-color: white;
	border-color: #5ab7ff;
	margin-left: 900px;
	border-radius: 15px;
	border-width: 2px;
	font-size: 26px;
	cursor: pointer;
	
}
.but:hover
{
	background-color: #5ab7ff;
	transition: 0.2s;
	outline-offset: 10px;
	outline-width: 2px;
	outline-color:#5ab7ff;
	outline-style: auto;
	transition: 0.5s;
}
.inputfeilds{
	
	margin-right: 1000px;
	margin-bottom: 25px;
	width: 20%;
	height: 60px;
	text-align: center;
	transform: translate(200%,0%);
	border-color: #5ab7ff;
	border-radius: 15px;
	/* background-image: url('search.png');
	background-position: 10px 5px;
  	background-repeat: no-repeat; */
	transition: width 0.4s ease-in-out;
}
.inputfeilds:focus{
	box-shadow: 0 0 0 .15vw skyblue;
	outline: none;
}
.startedtext
{
	font-size: 50px;
  	text-align: center;
  	color: #5ab7ff;
}
.startedcaption
{
	font-size: 25px;
  	text-align: center;
}
.accountswitch
{
	border: none;
	background-color: transparent;
	text-align: center;
	margin-left: 860px;
}

.radio-inputs {
display: block;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.5rem;
  background-color: #EEE;
  box-sizing: border-box;
  box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
  padding: 0.25rem;
  width: 300px;
  font-size: 20px;
}

.radio-inputs .radio {
  flex: 1 1 auto;
  text-align: center;
}

.radio-inputs .radio input {
  display: none;
}

.radio-inputs .radio .name {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border: none;
  padding: .5rem 0;
  color: rgba(51, 65, 85, 1);
  transition: all .15s ease-in-out;
}

.radio-inputs .radio input:checked + .name {
  background-color: #5ab7ff;
  font-weight: 600;
}


</style>


