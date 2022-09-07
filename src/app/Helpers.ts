import { BoardItem } from './classes/BoardItem';

// Stanja za 5x5

export const niz1 = [

  new BoardItem({
    row: 0,
    col: 1,
    value: 23,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 0,
    col: 2,
    value: 24,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 1,
    col: 0,
    value: 16,
    up: true,
    hasValue: true
  }),

  new BoardItem({
    row: 2,
    col: 0,
    value: 18,
    up: true,
    hasValue: true
  }),

  new BoardItem({
    row: 3,
    col: 0,
    value: 23,
    up: true,
    hasValue: true
  }),

  new BoardItem({
    row: 1,
    col: 3,
    value: 7,
    up: false,
    hasValue: true
  }),

  new BoardItem({
    row: 1,
    col: 4,
    value: 6,
    up: false,
    hasValue: true
  }),

  new BoardItem({
    row: 4,
    col: 2,
    value: 3,
    up: true,
    hasValue: true
  }),

  new BoardItem({
    row: 0,
    col: 0,
    value: -1,
    up: false,
    hasValue: false
  }),

  new BoardItem({
    row: 0,
    col: 3,
    value: -1,
    up: false,
    hasValue: false
  }),

  new BoardItem({
    row: 0,
    col: 4,
    value: -1,
    up: false,
    hasValue: false
  }),

  new BoardItem({
    row: 4,
    col: 0,
    value: -1,
    up: false,
    hasValue: false
  }),

  new BoardItem({
      row: 4,
      col: 1,
      value: -1,
      up: false,
      hasValue: false
    }
  )

];
export const niz2 = [
  new BoardItem({
      row: 0,
      col: 0,
      value: -1,
      up: false,
      hasValue: false
    }
  ),
  new BoardItem({
      row: 0,
      col: 1,
      value: 3,
      up: false,
      hasValue: true
    }
  ),
  new BoardItem({
      row: 0,
      col: 2,
      value: 11,
      up: false,
      hasValue: true
    }
  ),
  new BoardItem({
      row: 0,
      col: 3,
      value: 29,
      up: false,
      hasValue: true
    }
  ),
  new BoardItem({
      row: 0,
      col: 4,
      value: -1,
      up: false,
      hasValue: false
    }
  ),
  new BoardItem({
      row: 1,
      col: 0,
      value: 8,
      up: true,
      hasValue: true
    }
  ),
  new BoardItem({
      row: 1,
      col: 4,
      value: -1,
      up: false,
      hasValue: false
    }
  ),
  new BoardItem({
      row: 2,
      col: 0,
      value: 16,
      up: true,
      hasValue: true
    }
  ),
  new BoardItem({
      row: 2,
      col: 4,
      value: 3,
      up: false,
      hasValue: true
    }
  ),
  new BoardItem({
      row: 3,
      col: 0,
      value: -1,
      up: false,
      hasValue: false
    }
  ),
  new BoardItem({
      row: 3,
      col: 1,
      value: 12,
      up: true,
      hasValue: true
    }
  ),
  new BoardItem({
      row: 4,
      col: 0,
      value: -1,
      up: false,
      hasValue: false
    }
  ),
  new BoardItem({
      row: 4,
      col: 1,
      value: 10,
      up: true,
      hasValue: true
    }
  )
];


export const niz3 = [
  new BoardItem({
      row: 0,
      col: 0,
      value: -1,
      up: false,
      hasValue: false
    }
  ),
  new BoardItem({
      row: 0,
      col: 1,
      value: 16,
      up: false,
      hasValue: true
    }
  ),
  new BoardItem({
      row: 0,
      col: 2,
      value: 23,
      up: false,
      hasValue: true
    }
  ),
  new BoardItem({
      row: 0,
      col: 3,
      value: -1,
      up: false,
      hasValue: false
    }
  ),
  new BoardItem({
      row: 0,
      col: 4,
      value: -1,
      up: false,
      hasValue: false
    }
  ),
  new BoardItem({
      row: 1,
      col: 0,
      value: 15,
      up: true,
      hasValue: true
    }
  ),
  new BoardItem({
      row: 1,
      col: 3,
      value: 7,
      up: false,
      hasValue: true
    }
  ),
  new BoardItem({
      row: 1,
      col: 4,
      value: -1,
      up: false,
      hasValue: false
    }
  ),
  new BoardItem({
      row: 2,
      col: 0,
      value: 18,
      up: true,
      hasValue: true
    }
  ),
  new BoardItem({
      row: 2,
      col: 4,
      value: 16,
      up: false,
      hasValue: true
    }
  ),
  new BoardItem({
      row: 3,
      col: 0,
      value: -1,
      up: false,
      hasValue: false
    }
  ),
  new BoardItem({
      row: 3,
      col: 1,
      value: 18,
      up: true,
      hasValue: true
    }
  ),
  new BoardItem({
      row: 4,
      col: 0,
      value: -1,
      up: false,
      hasValue: false
    }
  ),
  new BoardItem({
      row: 4,
      col: 1,
      value: -1,
      up: false,
      hasValue: false
    }
  ),
  new BoardItem({
      row: 4,
      col: 2,
      value: 11,
      up: true,
      hasValue: true
    }
  )
];

export const niz5x5 = [niz1, niz2, niz3];

// Stanja za 3x3

export const niz3x31 = [
  new BoardItem({
    row: 0,
    col: 0,
    value: -1,
    up: false,
    hasValue: false
  }),
  new BoardItem({
    row: 0,
    col: 1,
    value: 14,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 0,
    col: 2,
    value: 10,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 1,
    col: 0,
    value: 16,
    up: true,
    hasValue: true
  }),
  new BoardItem({
    row: 2,
    col: 0,
    value: 8,
    up: true,
    hasValue: true
  })
];
export const niz3x32 = [
  new BoardItem({
    row: 0,
    col: 0,
    value: -1,
    up: false,
    hasValue: false
  }),
  new BoardItem({
    row: 0,
    col: 1,
    value: 16,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 0,
    col: 2,
    value: 11,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 1,
    col: 0,
    value: 17,
    up: true,
    hasValue: true
  }),
  new BoardItem({
    row: 2,
    col: 0,
    value: 10,
    up: true,
    hasValue: true
  }),
];

export const niz3x33 = [
  new BoardItem({
    row: 0,
    col: 0,
    value: -1,
    up: false,
    hasValue: false
  }),
  new BoardItem({
    row: 0,
    col: 1,
    value: 16,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 0,
    col: 2,
    value: 14,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 1,
    col: 0,
    value: 17,
    up: true,
    hasValue: true
  }),
  new BoardItem({
    row: 2,
    col: 0,
    value: 13,
    up: true,
    hasValue: true
  }),
];

export const niz3x3 = [niz3x31, niz3x32, niz3x33];

// Stanja za 4 x 4

export const niz4x41 = [
  new BoardItem({
    row: 0,
    col: 0,
    value: -1,
    up: false,
    hasValue: false
  }),
  new BoardItem({
    row: 0,
    col: 1,
    value: 19,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 0,
    col: 2,
    value: 11,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 0,
    col: 3,
    value: 10,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 1,
    col: 0,
    value: 23,
    up: true,
    hasValue: true
  }),
  new BoardItem({
    row: 2,
    col: 0,
    value: 10,
    up: true,
    hasValue: true
  }),
  new BoardItem({
    row: 3,
    col: 0,
    value: 7,
    up: true,
    hasValue: true
  }),
];

export const niz4x42 = [
  new BoardItem({
    row: 0,
    col: 0,
    value: -1,
    up: false,
    hasValue: false
  }),
  new BoardItem({
    row: 0,
    col: 1,
    value: 23,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 0,
    col: 2,
    value: 20,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 0,
    col: 3,
    value: 7,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 1,
    col: 0,
    value: 20,
    up: true,
    hasValue: true
  }),
  new BoardItem({
    row: 2,
    col: 0,
    value: 17,
    up: true,
    hasValue: true
  }),
  new BoardItem({
    row: 3,
    col: 0,
    value: 13,
    up: true,
    hasValue: true
  }),
];

export const niz4x43 = [
  new BoardItem({
    row: 0,
    col: 0,
    value: -1,
    up: false,
    hasValue: false
  }),
  new BoardItem({
    row: 0,
    col: 1,
    value: 22,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 0,
    col: 2,
    value: 12,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 0,
    col: 3,
    value: 10,
    up: false,
    hasValue: true
  }),
  new BoardItem({
    row: 1,
    col: 0,
    value: 23,
    up: true,
    hasValue: true
  }),
  new BoardItem({
    row: 2,
    col: 0,
    value: 13,
    up: true,
    hasValue: true
  }),
  new BoardItem({
    row: 3,
    col: 0,
    value: 8,
    up: true,
    hasValue: true
  }),
];

export const niz4x4 = [niz4x41, niz4x42, niz4x43];
