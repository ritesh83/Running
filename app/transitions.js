export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('details'),
    this.use('fade'),
    this.reverse('fade')
  );
}