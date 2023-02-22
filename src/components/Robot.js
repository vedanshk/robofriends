
function Robot({robot}) {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow w5 h8">
        <img src={`https://robohash.org/${robot.id}?set=set1&size=150x150`} alt="_robot" />
        <div className="flex flex-column ">
            <h1>{robot.name}</h1>
            <p >{robot.email}</p>
        </div>
    </div>
  )
}

export default Robot