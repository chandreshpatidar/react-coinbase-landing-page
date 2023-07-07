import styled from 'styled-components';
import { dailyPricesData } from './prices';

export default function DailyPrices() {
  const getPriceChangeClass = (change: string) => {
    const changeNum = change[0];

    if (changeNum === '+') return 'green';
    else if (changeNum === '-') return 'red';

    return;
  };

  return (
    <Section className='flex column gap-2'>
      <div className='container'>
        <div className='header subdue'>
          <span>#</span>
          <span>Name</span>
          <span>Price</span>
          <span>Change</span>
          <span>Market Cap</span>
          <span>Chart</span>
        </div>

        <div className='data flex column gap-1'>
          {dailyPricesData.map(
            (
              { change, chart, image, marketCap, name, price, short },
              index
            ) => (
              <div
                className='row a-center'
                key={price}
              >
                <span>{index + 1}</span>
                <div className='name flex gap-1 a-center'>
                  <span className='image'>
                    <img
                      src={image}
                      alt='name'
                    />
                  </span>
                  <span>{name}</span>
                  <span className='short subdue'> {short}</span>
                </div>

                <span>{price}</span>
                <span className={getPriceChangeClass(change)}>{change}</span>
                <span>{marketCap}</span>
                <span className='chart'>
                  <img
                    src={chart}
                    alt='chart'
                  />
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: #ffffff10;
  border-radius: 1rem;
  .header {
    border-bottom: 1px solid #ffffff42;
    padding: 2rem;
  }

  .header,
  .data > .row {
    display: grid;
    grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 0.5fr;
  }

  .data {
    padding: 1rem 2rem 2rem 2rem;
  }

  .green {
    color: var(--green);
  }

  .red {
    color: var(--red);
  }
`;
