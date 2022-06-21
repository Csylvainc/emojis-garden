const Liste = ({ title, symbol }) => {
  return (
      
        <li onClick={() => navigator.clipboard.writeText({ value: symbol }.value)} className="m-3">
        
          <p>Tritre de l'emoji : {title}</p>
          <p>Rendu : {symbol}</p>
        </li>
     
  );
};

export default Liste;
