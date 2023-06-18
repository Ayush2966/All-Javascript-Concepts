let journal = [
    {
      events: ["work", "touched tree", "pizza", "running", "television"],
      squirrel: false
    },
    {
      events: [
        "work",
        "ice cream",
        "cauliflower",
        "lasagna",
        "touched tree",
        "brushed teeth"
      ],
      squirrel: false
    },
    { events: ["weekend", "cycling", "break", "peanuts", "beer"], squirrel: true }
    /* and so on... */
  ];

  for (const value of journal) {
        console.log(`${value.events.length} events today`)      
  }