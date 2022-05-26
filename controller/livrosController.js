const mongoose = require('mongoose')
const livros = mongoose.model('livro')

exports.getLivros = (request, response) => {
    livros.find({}).then((livros) => {
        return response.json(livros)
    }).catch((error) => {
        return response.json(400).json({
            error: true,
            message: 'Não existe livros'
        })
    })
}

exports.getIdLivros = (request, response) => {
    livros.find({ _id: request.params.id })
        .then((livros) => {
            return response.json(livros)
        })
        .catch(() => {
            return response.status(400).json({
                error: true,
                message: 'Não existe o livro com id requisitado'
            })
        })
}

exports.postLivros = (request, response) => {
    livros.create(request.body, (error) => {
        if (error) return response.status(400).json({
            error: true,
            message: 'Erro ao registrar livro, verifique se todos os dados requisitados estão preenchidos corretamente'
        })
        return response.status(200).json({
            error: false,
            message: 'Livro cadastrado com sucesso'
        })
    })
}

exports.putLivros = (request, response) => {
    livros.findOneAndUpdate({ _Id: request.params.id },
        request.body,
        (error) => {
            if (error) return response.status(400).json({
                error: true,
                message: 'Erro ao alterar dados do livro, verifique se o id da operação está correto ou se todos os dados requisitados estão preenchidos corretamente'
            })
            return response.json({
                error: false,
                message: 'Livro editado com sucesso!'
            })
        })
};

exports.deleteLivros = (request, response) => {
    livros.findOneAndDelete({ _Id: request.params.id },
        (error) => {
            if (error) return response.status(400).json({
                error: true,
                message: 'Erro ao excluir livro, verifique se o id da operação está correto'
            })
            return response.json({
                error: false,
                message: 'Livro deletado com sucesso!'
            })
        })
}

