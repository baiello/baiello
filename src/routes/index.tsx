import { component$, useStyles$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import type { DocumentHead } from '@builder.io/qwik-city';
import classNames from 'classnames';

import Omniskills from '~/components/omniskills/omniskills';

import { jobs, trainings } from '~/data/resume_en.json';

import styles from './index.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <section class="container timeline">
      <h2 class="editing">About me.</h2>
      <div class="row">
        <div class="column">
          <h3>Experience</h3>
          {
            jobs.map((job, index) => (
              <div class={classNames('timeline-item', { marked: job.current })} key={index}>
                <h4>{job.position}</h4>
                {
                  job.companyUrl
                    ? <Link href={job.companyUrl} target="_blank" class="font-h4 company">{job.company}</Link>
                    : (<span class="font-h4 company">{job.company}</span>)
                }
                <div class="period">{job.start} - {job.end} | {job.location}</div>
                <div class="description">{job.description}</div>
              </div>
            ))
          }
        </div>
        <div class="column">
          <div class="omniskills-container">
            <Omniskills />
          </div>
          <div class="trainings">
            <h3>Education</h3>
            {
              trainings.map((training, index) => (
                <div class="timeline-item" key={ index }>
                  <h4><Link href={training.schoolUrl} target="_blank" class="establishment">{training.schoolName}</Link></h4>
                  <div class="period">{training.period} | {training.location}</div>
                  { training.diploma && <div>{training.diploma}</div> }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: 'Brice AIELLO',
  meta: [
    {
      name: 'description',
      content: 'Who is Brice AIELLO?',
    },
  ],
};
