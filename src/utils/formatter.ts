export const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',     // exemplo: "maio"
    year: 'numeric',
  });

export const priceFormatter = new Intl.NumberFormat('pt-BR',{
    style:'currency',
    currency:'BRL',
})