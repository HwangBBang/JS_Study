
function modeButton(props) 
{
    const[isClicked, setIsClicked] = React.useState(false);
    
    return React.createElement(
        'NightMode','DayMode',
        { onclick: () => setIsClicked(true) },
        isClicked ? 'ThisMode' : 'NightMode'
    )
}