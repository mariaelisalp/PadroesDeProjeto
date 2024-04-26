import Cliente from "./Cliente";
import Endereco from "./Endereco";
import Produto from "./Produto";
import Telefone from "./Telefone";
import Venda from "./Venda";

let telefone1 = new Telefone("42", 989764523,  "celular");
let telefone2 = new Telefone("43", 34729444, "residencial");

let telefones: Telefone[] = [telefone1, telefone2];

let endereco1 = new Endereco("PR", "Ivaipora", "Avenida Minas Gerais", 456);

let cliente1 =  new Cliente("Amanda", 96856734908, 24061999, "feminino", endereco1, telefones);

let produto1 = new Produto(5678, "camiseta verde P", 79.99);
let produto2 = new Produto(5679, "calça preta M", 59.99);
let produtos : Produto[] = [produto1, produto2];

let venda1 = new Venda(786, 17082023, cliente1, produtos);

console.log("\nCliente:", cliente1.nome);
console.log("CPF:", cliente1.cpf);
console.log("Data de Nascimento:", cliente1.data_nascimento);
console.log("Sexo:", cliente1.sexo);
console.log("Endereço:", cliente1.endereco.cidade,",", cliente1.endereco.rua, cliente1.endereco.numero);
console.log("Telefones:");

for (let i = 0; i < cliente1.telefone.length; i++) {
    const telefone = cliente1.telefone[i];
    console.log("-", telefone.tipo, ":", telefone.ddd, telefone.numero);
}

console.log("\nCodigo da Venda:", venda1.codigo);
console.log("Data:", venda1.data);
console.log("Cliente:", venda1.cliente.nome);
console.log("Produtos:");

for (let i = 0; i < venda1.produto.length; i++) {
    const produto = venda1.produto[i];
    console.log("-", produto.descricao, "- R$", produto.valor);
}

console.log("\nCalculando valor da compra...");
console.log("Total: ", venda1.calcularTotal(produtos));
