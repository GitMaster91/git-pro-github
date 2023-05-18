const arr = [
   { id: 1, status: true, user: 'user-1' },
   { id: 2, status: true, user: 'user-2' }
];

const arr2 = [
   { id: 1, status: true, user: 'USER-1' },
   { id: 2, status: true, user: 'USER-2' }
];

function relevantFn(obj) {
   return `id: ${obj.id} name: ${obj.user.toUpperCase()}`;
};

console.log(relevantFn({
   id  : 1,
   user: 'luis'
}));
