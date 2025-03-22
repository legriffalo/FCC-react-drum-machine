
interface InfoPanelProps {
  used:string;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ used }) => {
    
    
    return (
      <>
      <div>
        {used}
      </div>
      
      
      
      </>
    );
  };
  
  export default InfoPanel;