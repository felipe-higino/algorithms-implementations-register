using System;
using System.Collections.Generic;
using System.Linq;

/* 
tutorials from 
https://docs.microsoft.com/pt-br/dotnet/csharp/tutorials/working-with-linq
https://docs.microsoft.com/pt-br/dotnet/csharp/programming-guide/concepts/linq/walkthrough-writing-queries-linq

From:
    Sequência de "from" é usado para criar um "SelectMany"
    Semelhante a aninhar dados em uma estrutura

Where:
    Condição para o elemento ser colocado no "SelectMany"

Select:
    Estrutura os dados do SelectMany
    em "T", para devolver um IEnumerable<T>


Orderby  _ (ascending/descending)
group _ by _ 
*/

namespace Linq_queries
{
    class Program
    {
        static void Main(string[] args)
        {
            var deck = 
                from s in ECards.Suits()
                from r in ECards.Ranks()
                select new {Suit = s, Rank = r};
            
            //print all possible cards in deck
            deck.All( card =>{
                System.Console.WriteLine(card);
                return true;
            });

        }
    }
}