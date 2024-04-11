import {
  HiOutlineBanknotes,
  HiOutlineCalendarDays,
  HiOutlineBriefcase,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";

const Stats = ({ confirmedStays, bookings, numDays, countCabins }) => {
  //1.Calc numBookings
  const numBookings = bookings.length;

  //2. Compute Sales
  const sales = confirmedStays.reduce((acc, cur) => acc + cur.totalPrice, 0);

  //3. Get Checkins
  const checkins = confirmedStays.length;

  //4. Occupancy
  const occupancy =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * countCabins);

  // const occupancy = 50 / (7 * 8);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupancy * 100) + "%"}
      />
    </>
  );
};

export default Stats;
