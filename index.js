  // Get the elements from index.html
  const navbarBurger = document.getElementById('navbar-burger');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('close-sidebar');
  
  navbarBurger.addEventListener('click', () => {
    console.log('Button clicked!');
    sidebar.classList.toggle('hidden');
  });
  
  closeSidebar.addEventListener('click', () => {
    sidebar.classList.add('hidden');
  });
  
// Use the text field to build the body of the mail
function buildBody() {
  var message = document.getElementById("message").value;
  var body = encodeURIComponent(message);
  var mailtoLink =
    "mailto:leavengo.management@gmail.com?subject=Formulaire%20de%20contact%20Leave%26Go&body=" +
    body;
  document.forms[0].action = mailtoLink;
}
