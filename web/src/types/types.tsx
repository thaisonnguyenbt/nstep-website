import { Page } from 'schema';

export interface CreatePageProps {
  pageContext: PageContext;
}

export interface PageContext {
  page: Page;
}
