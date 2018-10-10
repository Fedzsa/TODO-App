import { InMemoryDbService } from 'angular-in-memory-web-api';

export  class InMemoryDataService implements InMemoryDbService {
  createDb() {
    var messages = [
      { id: 1, title: 'Lorem ipsum', msg: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
      { id: 2, title: 'Ut enim ad minim veniam', msg: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      { id: 3, title: 'Donec at nisi placerat', msg: 'Donec at nisi placerat, viverra ipsum a, tincidunt risus. Pellentesque quis mauris quis mi aliquam consectetur. Aliquam finibus justo urna, id aliquam ligula tempus sit amet. Nam lectus lectus, dignissim vel euismod a, posuere sodales erat.' },
      { id: 4, title: 'Integer sit', msg: 'Integer sit amet nisl vitae mauris vehicula interdum a vitae nunc. Nunc maximus odio vel nisi sollicitudin porta. Sed id dignissim urna. Pellentesque vel purus augue. Nam in ante non ante luctus tincidunt id non dolor.' },
      { id: 5, title: 'Aliquam ut ex accumsan', msg: 'Aliquam ut ex accumsan, tempor velit quis, semper mauris. Etiam sit amet nisl ac dui varius dignissim. Pellentesque sit amet erat feugiat, posuere velit sed, ornare massa. Vestibulum ac purus lectus. Integer in congue leo. Vivamus a orci ipsum. Donec commodo accumsan mauris id suscipit.' },
      { id: 6, title: 'In ac neque mauris', msg: 'In ac neque mauris. Sed et sollicitudin ligula.' }
    ];

    return {messages};
  }
}