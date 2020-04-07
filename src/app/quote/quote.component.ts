import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'jane Ndi', 'Life is what happens when you’re busy making other plans.', 'Anderson', new Date(2020, 4, 20)),
    new Quote(2, 'Alphonce Okoth', 'Never let the fear of striking out keep you from playing the game', 'Anderson', new Date(1977, 2, 14)),
    new Quote(3, 'Elton Brown', 'You only live once, but if you do it right, once is enough', 'Anderson', new Date(2020,5 ,24)),

  ]

showDescription= false;//boolean setting to hide and display

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }//removes quote
    }
  }

  toggleQuote() {
    this.showDescription = !this.showDescription;//show or hide content
  }



ngOnInit() {
}

}