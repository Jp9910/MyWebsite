
function Resume() {
  return (
    <object
      data="/website/curriculo.pdf"
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
      <p>Seu navegador não suporta PDF embutido — <a href="/website/curriculo.pdf" target="_blank" rel="noopener noreferrer">abrir em nova aba</a></p>
    </object>
  );
}

export default Resume