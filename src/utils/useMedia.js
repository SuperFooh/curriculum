import React, { useEffect, createRef, useState } from 'react';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';


/**
 * Check if an element is in viewport
 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 * @param {boolean} triggerOnce - Trigger renderer only once when element become visible
 */
export default function useVisibleOnScreen<Element extends HTMLElement>(
  offset = 0,
  throttleMilliseconds = 1000,
  triggerOnce = false,
  scrollElementId = ''
): [boolean, React.RefObject<Element>] {
  const [isVisible, setIsVisible] = useState(false);
  const currentElement = createRef<Element>();

  useEffect(() => {
    let subscription: Subscription | null = null;
    let onScrollHandler: (() => void) | null = null;
    const scrollElement = scrollElementId
      ? document.getElementById(scrollElementId)
      : window;
    const ref = currentElement.current;
    if (ref && scrollElement) {
      const subject = new Subject();
      subscription = subject
        .pipe(throttleTime(throttleMilliseconds))
        .subscribe(() => {
          if (!ref) {
            if (!triggerOnce) {
              setIsVisible(false);
            }
            return;
          }

          const top = ref.getBoundingClientRect().top;
          const visible =
            top + offset >= 0 && top - offset <= window.innerHeight;
          if (triggerOnce) {
            if (visible) {
              setIsVisible(visible);
            }
          } else {
            setIsVisible(visible);
          }
        });
      onScrollHandler = () => {
        subject.next();
      };
      if (scrollElement) {
        scrollElement.addEventListener('scroll', onScrollHandler, false);
      }
      // Check when just loaded:
      onScrollHandler();
    } else {
      console.log('Ref or scroll element cannot be found.');
    }

    return () => {
      if (onScrollHandler && scrollElement) {
        scrollElement.removeEventListener('scroll', onScrollHandler, false);
      }
      if (subscription) {
        subscription.unsubscribe();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, throttleMilliseconds, triggerOnce, scrollElementId]);

  return [isVisible, currentElement];
}