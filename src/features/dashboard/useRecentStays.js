import { useQuery } from '@tanstack/react-query';
import { getStaysAfterDate } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { subDays } from 'date-fns';
export const useRecentStays = () => {
  const [searchParams] = useSearchParams()

  const numDays = !searchParams.get('last') ? 7 : Number(searchParams.get('last'))

  const queryDays = subDays(new Date(), numDays).toISOString()

  const { data: recentStays, isLoading } = useQuery({
    queryFn: () => getStaysAfterDate(queryDays),
    queryKey: ['recentStays', `last-${numDays}`],
  })

  const confirmedStays = recentStays?.filter(stay => stay.status === 'checked-in' || stay.status === 'checked-out')
  return { recentStays, isLoading, confirmedStays, numDays }
}
