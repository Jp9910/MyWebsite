
function Curriculo() {
  return (
    <object
      data="/website/curriculo-joao-secundo.pdf"
      type="application/pdf"
      width="100%"
      height="100%"
      style={{
        width: "100%",
        height: "100vh",  // full viewport height
        border: "none",
        display: "block",
      }}
    >
      <p>Seu navegador não suporta PDF embutido — <a href="/website/curriculo-joao-secundo.pdf" target="_blank" rel="noopener noreferrer">abrir em nova aba</a></p>
    </object>
  );
}

export default Curriculo