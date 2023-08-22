

function Form() {
    return (
        <form id="htmlFormulario-de-cadastro">
            <div className="mb-3">
                <label htmlFor="nome" className="htmlForm-label">Nome:</label>
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="fas fa-user"></i>
                    </span>
                    <input type="text" className="htmlForm-control" name="nome" id="nome" />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="fone" className="htmlForm-label">Fone:</label>
                <div className="input-group">
                    <span className="input-group-text">
                        <i className="fas fa-phone"></i>
                    </span>
                    <input type="tel" className="htmlForm-control" name="fone" id="fone" />
                </div>
            </div>
            <div className="mb-3">
                <button type="submit" className="btn btn-primary btn-lg">
                    <i className="fas fa-floppy-disk"></i> Salvar
                </button>
                <button type="reset" className="btn btn-danger btn-lg">
                    <i className="fas fa-broom"></i> Limpar
                </button>
            </div>
        </form>
    )
}

export default Form;