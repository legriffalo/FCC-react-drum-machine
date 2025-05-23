
interface InfoPanelProps {
  used:string;
  handleOnOff?:any;
  handleBankChange?:any;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ used,  handleBankChange, handleOnOff }) => {
    
    
    return (
      <>
      <div className = "h-3/10 w-full border flex flex-col rounded-xl">
        
      <div className = "bg-gray-500  m-auto border h-1/3 w-4/5 flex flex-row  rounded-xl">
        <label className="w-4/5 m-auto fieldset-label flex flex-row ">
         <p>Power</p>
            <input type="checkbox" defaultChecked className="toggle m-auto" onClick = {handleOnOff} />
        </label>
        </div>

        <div className= "m-auto w-4/5 text-center m-auto border rounded-xl">
            <h2 className= "text-xs md:text-lg">{used}</h2>
        </div>

        <div className = "bg-gray-500 m-auto border h-1/3 w-4/5 flex flex-row rounded-xl">
        <label className="w-4/5 m-auto fieldset-label flex flex-row items-center">
         <p>Bank</p>
            <input type="checkbox" defaultChecked className="toggle m-auto" onClick={handleBankChange}/>
        </label>
        </div>

      </div>
      
      
      
      </>
    );
  };
  
  export default InfoPanel;