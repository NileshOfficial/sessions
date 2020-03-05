/*
Q2.
<ul>
    <li data-time="5:17">Flexbox Video</li>
    <li data-time="8:22">Flexbox Video</li>
    <li data-time="3:34">Redux Video</li>
    <li data-time="5:23">Flexbox Video</li>
    <li data-time="7:12">Flexbox Video</li>
    <li data-time="7:24">Redux Video</li>
    <li data-time="6:46">Flexbox Video</li>
    <li data-time="4:45">Flexbox Video</li>
    <li data-time="4:40">Flexbox Video</li>
    <li data-time="7:58">Redux Video</li>
    <li data-time="11:51">Flexbox Video</li>
    <li data-time="9:13">Flexbox Video</li>
    <li data-time="5:50">Flexbox Video</li>
    <li data-time="5:52">Redux Video</li>
    <li data-time="5:49">Flexbox Video</li>
    <li data-time="8:57">Flexbox Video</li>
    <li data-time="11:29">Flexbox Video</li>
    <li data-time="3:07">Flexbox Video</li>
    <li data-time="5:59">Redux Video</li>
    <li data-time="3:31">Flexbox Video</li>
</ul>
    reduce to get total using .filter and .map
*/


window.onload = function questions() {
    
    let liItems = document.getElementsByTagName("li");
    
    // 1. Select all the list items on the page and convert to array.
        let arrayed = Array.from(liItems);
        console.log("1.");
        console.log(liItems);
        console.log("\n\n");
    
    //2. Filter for only the elements that contain the word 'flexbox'
        let flexLi = arrayed.filter( li => li.innerText.includes("Flexbox"));
        console.log("2.");
        console.log(flexLi);
        console.log("\n\n");
    
    //3. map down to a list of time strings
        let timeStrings = arrayed.map(li => li.getAttribute("data-time"));
        console.log("3.");
        console.log(timeStrings);
        console.log("\n\n");
    
    //4. map to an array of seconds
        let seconds = timeStrings.map(time => time.split(":")[1]);
        console.log("4.");
        console.log(seconds);
        console.log("\n\n");
    
    //5. reduce to get total
        console.log("5.");
        let numerals = seconds.map(sec => this.parseInt(sec));
        console.log(
            numerals.reduce((sum, current) => sum + parseInt(current))
        );
        console.log("\n\n");
}