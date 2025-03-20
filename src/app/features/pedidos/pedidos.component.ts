import { Component } from '@angular/core';

interface Item {
  id: number;
  nome: string;
  preco: number;
}

interface PedidoItem {
  item: Item;
  quantidade: number;
}

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  data: Item[] = [
    { id: 1, nome: "X-Burguer", preco: 15.00 },
    { id: 2, nome: "X-Salada", preco: 12.00 },
    { id: 3, nome: "X-Tudo", preco: 19.00 },
    { id: 4, nome: "X-Bacon", preco: 17.00 },
    { id: 5, nome: "Coca-Cola", preco: 5.00 },
    { id: 6, nome: "Suco Natural", preco: 7.00 }
  ];

  pedido: PedidoItem[] = [];

  adicionarItem(item: Item) {
    const itemExistente = this.pedido.find((pedidoItem) => pedidoItem.item.id === item.id);

    if (itemExistente) {
      itemExistente.quantidade++;
    } else {
      this.pedido.push({ item, quantidade: 1 });
    }
  }

  removerItem(item: Item) {
    this.pedido = this.pedido.filter((pedidoItem) => pedidoItem.item.id !== item.id);
  }

  alterarQuantidade(itemId: number, quantidade: number) {
    const item = this.pedido.find((pedidoItem) => pedidoItem.item.id === itemId);
    if (item) {
      item.quantidade = Math.max(1, item.quantidade + quantidade);
    }
  }

  totalCompra(): number {
    return this.pedido.reduce((acc, pedidoItem) => acc + (pedidoItem.item.preco * pedidoItem.quantidade), 0);
  }
}
