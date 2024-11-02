type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
  }

  type TopTypes = Pick<AllType, 'name'|'color'>
  type BottomTypes = Pick<AllType, 'position'|'weight'>


  function compare (top:TopTypes, bottom:BottomTypes): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    }
  }