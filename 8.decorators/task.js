function cachingDecoratorNew(func) {
  // Ваш код
  const cache = [];
  
  function wrapper(...args) {
    const hash = args.join(',');
    const objectFromCache = cache.find(item => item.hash === hash);
    if (objectFromCache) {
      console.log(`Из кэша: ${objectFromCache.value}`);
      return `Из кэша: ${objectFromCache.value}`;
    }

    let result = func(...args);
    cache.push({
      hash: hash,
      value: result
    });

    if (cache.length > 5) {
      cache.shift();
    }

    console.log(`Вычисляем: ${result}`);
    return `Вычисляем: ${result}`;
  }

  return wrapper;
}

function debounceDecoratorNew(func, delay) {
  // Ваш код
  let isFirst = true;
  let isThrottled = false;
  let timeoutId;
  

  function wrapper(...args) {
    if (isFirst) {
      func(...args);
      isFirst = false;
      wrapper.count++;
    }
    wrapper.allCount++;
    if (!isThrottled) {
      isThrottled = true;
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      isThrottled = false;
      wrapper.count++;
    }, delay);
    
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}