import mongoose from 'mongoose';

const projetoSchema = new mongoose.Schema(

    {
        nome: { type: String, require: true },
        dataNascimento: { type: String, require: true },
        cpf: { type: String, require: true },
        sexo: { type: String, require: true },
        peso: { type: String, require: true },
        tipoSanguineo: { type: String, require: true },
        endereco: { type: Object, require: true },
        telefone: { type: Array, require: true },
        email: { type: String, require: true },
        tatto: { type: Boolean, require: true },
        tempoTatto: { type: String, require: true },
        indicaAmigos: { type: Boolean },
        permissaoNotificacao: { type: Boolean, require: true },
        origem: { type: String, require: true },


    }
)

const projetos = mongoose.model('projetos', projetoSchema);

export default projetos;