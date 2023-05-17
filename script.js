//your code here!
var list = document.getElementById("infi-list");
var i=0;
for(;i<10;i++) {
	list.innerHTML += `<li>Item ${i+1}</li>`;
} i++;
list.addEventListener("scroll",() => {
	if(list.scrollHeight == list.scrollTop + list.clientHeight) {
		list.innerHTML += `<li>Item ${i}</li>`;
		i++;
		list.innerHTML += `<li>Item ${i}</li>`;
		i++;
	}
});
