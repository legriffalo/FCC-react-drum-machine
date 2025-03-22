
interface InfoPanelProps {
  used:string;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ used }) => {
    
    
    return (
      <>
      <div className = "w-3/10 h-full border flex flex-col rounded-xl">
        
      <div className = "bg-gray-500  m-auto border h-1/3 w-4/5 flex flex-row rounded-xl">
        <label className="w-4/5 m-auto fieldset-label flex flex-col p-3">
         <p>Power</p>
            <input type="checkbox" defaultChecked className="toggle m-auto" />
        </label>
        </div>

        <div className= "m-auto w-4/5 text-center m-auto border rounded-xl">
            <h2 >{used}</h2>
        </div>

        <div className = "bg-gray-500 m-auto border h-1/3 w-4/5 flex flex-row rounded-xl">
        <label className="w-4/5 m-auto fieldset-label flex flex-col p-3">
         <p>Bank</p>
            <input type="checkbox" defaultChecked className="toggle m-auto" />
        </label>
        </div>

      </div>
      
      
      
      </>
    );
  };
  
  export default InfoPanel;