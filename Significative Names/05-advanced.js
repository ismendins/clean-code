/**
 * Exercício 5: Classes com nomes não representativos e métodos inconsistentes
 * Problema: A classe abaixo tem nomes vagos e métodos com convenções de nomenclatura inconsistentes.
 */
class Gerenciador {
  constructor(config) {
    this.config = config;
    this.itens = [];
  }

  addItem(item) {
    this.itens.push(item);
  }

  getItem(id) {
    return this.itens.find((item) => item.id === id);
  }

  updateItemById(id, novosValores) {
    const index = this.itens.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.itens[index] = { ...this.itens[index], ...novosValores };
      return true;
    }
    return false;
  }

  deleteItemById(id) {
    const index = this.itens.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.itens.splice(index, 1);
      return true;
    }
    return false;
  }

  fetchAll(sort = false) {
    // Retorna todos os itens, opcionalmente ordenados
    if (sort) {
      return [...this.itens].sort((a, b) => a.id - b.id);
    }
    return [...this.itens];
  }

  saveData() {
    // Salva os dados conforme configuração
    if (this.config.method === "local") {
      localStorage.setItem(this.config.key, JSON.stringify(this.itens));
    } else if (this.config.method === "server") {
      // Código para salvar no servidor
    }
  }
}
