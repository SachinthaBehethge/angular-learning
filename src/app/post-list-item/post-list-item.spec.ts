import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItem } from './post-list-item';

describe('PostListItem', () => {
  let component: PostListItem;
  let fixture: ComponentFixture<PostListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
