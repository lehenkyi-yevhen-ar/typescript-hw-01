type DateDetails = {
    createAt: Date,
    updateAt: Date
}

type Post = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open'|'close',
    details?: DateDetails
}

const page1:Post = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
      createAt: new Date('2021-01-01'),
      updateAt: new Date('2021-05-01'),
    }
  }
  
  const page2:Post = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
  }