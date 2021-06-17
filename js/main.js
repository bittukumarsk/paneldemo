/* SideBar Open & Close */
$(document).ready(function()
{
    $(".open").click(function()
    {
        $(".sidebar-inner").removeClass("hide");
        $(".main-container").removeClass("hide-sidebar");
        $("footer").addClass("show-sidebar");
        $(".open").addClass("hide");
        $(".close").removeClass("hide");
        $(".close").addClass("show");
    });
    $(".close").click(function()
    {
        $(".sidebar-inner").addClass("hide");
        $(".main-container").addClass("hide-sidebar");
        $("footer").removeClass("show-sidebar");
        $(".open").removeClass("hide");
        $(".open").addClass("show");
        $(".close").removeClass("show");
        $(".close").addClass("hide");
    });
});

/* Menu Open & Close */
function changeState(i)
{
    const links = document.querySelector('.sidebar-menu').children;
    for(let j=0; j<links.length; j++)
    {
        if(j!=i)
        {
            links[j].classList.remove("show");
        }
    }
    links[i].classList.toggle("show");
}