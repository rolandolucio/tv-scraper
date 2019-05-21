
// const driver = (state) => ({
//   drive: () => state.position = state.position + state.speed
// })
// const barker = (state) => ({
//   bark: () => console.log('Woof, I am ' + state.name)
// });
// const murderRobotDog = (name) => {
//   let state = {
//     name,
//     speed: 100,
//     position: 0
//   }
//   return Object.assign({},
//     barker(state),
//     driver(state)
//   )
// }
// const bruno = murderRobotDog('bruno')
// bruno.bark(); // "Woof, I am Bruno"
// console.log(bruno.drive());
// console.log(bruno)

const barker = (state) => ({
  bark: () => console.log('Woof, I am ' + state.name)
});

/*
bruno = {
  name,
  speed,
  position,
  bark()
}
*/