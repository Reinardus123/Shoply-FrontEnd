import stats from "../../data/TechStack"

function TechStat(){

    return (
        <div>

            <p className="text-center text-purple-600 text-xs font-semibold">
                Built with
            </p>

            <h2 className="text-center text-3xl font-bold mt-2">
                Technologies used
            </h2>

            <div className="flex flex-warp justify-center gap-4 mt-8">
            
                {stats.map((stat) => {
                    const Icon = stat.icon
                    
                    return(
                    <div className="bg-white px-6 py-3 rounded-xl shadow-sm flex items-center justify-center gap-2">
                        <img src={stat.logo} alt=""  className="w-[50px]"/>
                        <h1>
                            {stat.item}
                        </h1>
                    </div>
                    );
                    
                })}
                
            </div>

        </div>
    )
}


export default TechStat;